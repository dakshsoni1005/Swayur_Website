'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RotateCw, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
import { Product } from '@/types';

interface Product3DViewerProps {
  product: Product;
  capColor?: string;
  className?: string;
}

export const Product3DViewer: React.FC<Product3DViewerProps> = ({
  product,
  capColor,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRotating, setIsRotating] = useState(false);

  // Determine cap color based on product slug
  const getCapColor = useCallback((): number => {
    if (capColor && capColor !== '#15803d') {
      return parseInt(capColor.replace('#', '0x'), 16);
    }
    switch (product.slug) {
      case 'beauveria-bassiana':
        return 0xb91c1c; // Deep Red matching Beauveria Bassiana label
      case 'bio-npk-consortia':
        return 0x15803d; // Dark Green
      case 'bio-zsb':
        return 0xd97706; // Golden Mustard Yellow
      case 'trichoderma-viride':
        return 0x1d4ed8; // Royal Blue
      case 'pseudomonas-fluorescens':
        return 0x111827; // Charcoal Black
      case 'mycorrhiza':
        return 0xf3f4f6; // White/Light Gray
      default:
        return 0xb91c1c; // Default Red for biopesticides
    }
  }, [capColor, product.slug]);

  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    bottleGroup: THREE.Group;
    targetRotationX: number;
    targetRotationY: number;
    rotationX: number;
    rotationY: number;
    targetZoom: number;
    zoom: number;
    isDragging: boolean;
    previousMousePosition: { x: number; y: number };
    animId: number;
  } | null>(null);

  useEffect(() => {
    const domContainer = containerRef.current;
    if (!domContainer) return;

    const width = domContainer.clientWidth || 400;
    const height = domContainer.clientHeight || 400;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfcfdfc);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 1.6, 6.2);
    camera.lookAt(0, 1.3, 0);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    domContainer.appendChild(renderer.domElement);

    // 4. Lighting Setup (Studio Product Photography)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.25);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.9);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0001;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 0.95);
    fillLight.position.set(-5, 4, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xdcfce7, 1.15);
    rimLight.position.set(0, 6, -6);
    scene.add(rimLight);

    // 5. Bottle Group Construction
    const bottleGroup = new THREE.Group();
    scene.add(bottleGroup);

    // --- Bottle Geometry (Procedural Lathe Profile for White HDPE Bottle) ---
    const points: THREE.Vector2[] = [];

    // Base bottom
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.9, 0));
    // Bottom bevel
    points.push(new THREE.Vector2(0.98, 0.08));
    points.push(new THREE.Vector2(1.0, 0.2));
    // Cylindrical main body
    points.push(new THREE.Vector2(1.0, 2.3));
    // Shoulder curve
    points.push(new THREE.Vector2(0.96, 2.5));
    points.push(new THREE.Vector2(0.75, 2.75));
    points.push(new THREE.Vector2(0.55, 2.95));
    // Neck collar
    points.push(new THREE.Vector2(0.52, 3.4));
    // Thread rim
    points.push(new THREE.Vector2(0.55, 3.45));
    points.push(new THREE.Vector2(0.55, 3.55));
    points.push(new THREE.Vector2(0.5, 3.6));
    points.push(new THREE.Vector2(0, 3.6));

    const bottleGeo = new THREE.LatheGeometry(points, 64);
    
    // HDPE White Plastic Material
    const bottleMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.28,
      metalness: 0.02,
    });

    const bottleMesh = new THREE.Mesh(bottleGeo, bottleMat);
    bottleMesh.castShadow = true;
    bottleMesh.receiveShadow = true;
    bottleGroup.add(bottleMesh);

    // --- Ridged Screw Cap ---
    const capColorHex = getCapColor();
    const capGroup = new THREE.Group();
    capGroup.position.set(0, 3.25, 0);

    const capBodyGeo = new THREE.CylinderGeometry(0.58, 0.58, 0.55, 48);
    const capMat = new THREE.MeshStandardMaterial({
      color: capColorHex,
      roughness: 0.35,
      metalness: 0.08,
    });
    const capBodyMesh = new THREE.Mesh(capBodyGeo, capMat);
    capBodyMesh.castShadow = true;
    capGroup.add(capBodyMesh);

    // Add 24 vertical ridges around the cap
    const numRidges = 24;
    const ridgeGeo = new THREE.BoxGeometry(0.03, 0.5, 0.04);
    for (let i = 0; i < numRidges; i++) {
      const angle = (i / numRidges) * Math.PI * 2;
      const ridgeMesh = new THREE.Mesh(ridgeGeo, capMat);
      ridgeMesh.position.set(Math.sin(angle) * 0.58, 0, Math.cos(angle) * 0.58);
      ridgeMesh.rotation.y = angle;
      capGroup.add(ridgeMesh);
    }
    bottleGroup.add(capGroup);

    // --- Label Cylinder & High-Resolution Texture Mapping ---
    const textureLoader = new THREE.TextureLoader();
    const rawSrc = product.labelTexture || product.image || '/images/products/bio-npk-consortia.jpg';
    const imageSrc = `${rawSrc}?v=20260829`;

    textureLoader.load(
      imageSrc,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = true;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        const labelHeight = 2.15;
        const labelRadius = 1.008; // Offset slightly above bottle surface to avoid z-fighting
        const labelGeo = new THREE.CylinderGeometry(labelRadius, labelRadius, labelHeight, 64, 1, true);

        // Map label texture with front/back full coverage
        const labelMat = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.3,
          metalness: 0.0,
          side: THREE.FrontSide,
        });

        const labelMesh = new THREE.Mesh(labelGeo, labelMat);
        labelMesh.position.set(0, 1.25, 0);
        // Align front face of texture directly to camera
        labelMesh.rotation.y = -Math.PI / 2;
        labelMesh.castShadow = true;
        bottleGroup.add(labelMesh);

        setIsLoading(false);
      },
      undefined,
      () => {
        setIsLoading(false);
      }
    );

    // --- Floor Soft Contact Shadow ---
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.28)');
      gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.12)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(3.5, 3.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.02;
    scene.add(shadowMesh);

    // Initial bottle positioning
    bottleGroup.position.set(0, -0.4, 0);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      bottleGroup,
      targetRotationX: 0,
      targetRotationY: 0,
      rotationX: 0,
      rotationY: 0,
      targetZoom: 6.2,
      zoom: 6.2,
      isDragging: false,
      previousMousePosition: { x: 0, y: 0 },
      animId: 0,
    };

    // --- Animation Loop ---
    let autoRotateAngle = 0;
    const animate = () => {
      if (!sceneRef.current) return;
      const ref = sceneRef.current;

      // Damping interpolation
      ref.rotationY += (ref.targetRotationY - ref.rotationY) * 0.08;
      ref.rotationX += (ref.targetRotationX - ref.rotationX) * 0.08;
      ref.zoom += (ref.targetZoom - ref.zoom) * 0.1;

      ref.camera.position.z = ref.zoom;

      if (!ref.isDragging && isRotating) {
        autoRotateAngle += 0.008;
        ref.bottleGroup.rotation.y = ref.rotationY + autoRotateAngle;
      } else {
        ref.bottleGroup.rotation.y = ref.rotationY;
      }

      ref.bottleGroup.rotation.x = ref.rotationX;

      ref.renderer.render(ref.scene, ref.camera);
      ref.animId = requestAnimationFrame(animate);
    };

    animate();

    // --- Touch & Pointer Event Listeners ---
    const handlePointerDown = (e: PointerEvent) => {
      if (!sceneRef.current) return;
      sceneRef.current.isDragging = true;
      sceneRef.current.previousMousePosition = { x: e.clientX, y: e.clientY };
      domContainer.style.cursor = 'grabbing';
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!sceneRef.current || !sceneRef.current.isDragging) return;
      const deltaX = e.clientX - sceneRef.current.previousMousePosition.x;
      const deltaY = e.clientY - sceneRef.current.previousMousePosition.y;

      sceneRef.current.targetRotationY += deltaX * 0.01;
      sceneRef.current.targetRotationX = Math.max(-0.35, Math.min(0.35, sceneRef.current.targetRotationX + deltaY * 0.008));

      sceneRef.current.previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      if (!sceneRef.current) return;
      sceneRef.current.isDragging = false;
      domContainer.style.cursor = 'grab';
    };

    const handleWheel = (e: WheelEvent) => {
      if (!sceneRef.current) return;
      e.preventDefault();
      const zoomDelta = e.deltaY * 0.005;
      sceneRef.current.targetZoom = Math.max(3.8, Math.min(9.0, sceneRef.current.targetZoom + zoomDelta));
    };

    domContainer.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    domContainer.addEventListener('wheel', handleWheel, { passive: false });

    // Handle Resize
    const handleResize = () => {
      if (!domContainer || !sceneRef.current) return;
      const w = domContainer.clientWidth;
      const h = domContainer.clientHeight;
      sceneRef.current.camera.aspect = w / h;
      sceneRef.current.camera.updateProjectionMatrix();
      sceneRef.current.renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      domContainer.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      domContainer.removeEventListener('wheel', handleWheel);

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animId);
        sceneRef.current.renderer.dispose();
        if (domContainer.contains(sceneRef.current.renderer.domElement)) {
          domContainer.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, [product.image, product.labelTexture, product.slug, capColor, isRotating, getCapColor]);

  // Controls helper functions
  const handleZoomIn = () => {
    if (sceneRef.current) {
      sceneRef.current.targetZoom = Math.max(3.8, sceneRef.current.targetZoom - 1.2);
    }
  };

  const handleZoomOut = () => {
    if (sceneRef.current) {
      sceneRef.current.targetZoom = Math.min(9.0, sceneRef.current.targetZoom + 1.2);
    }
  };

  const handleReset = () => {
    if (sceneRef.current) {
      sceneRef.current.targetRotationX = 0;
      sceneRef.current.targetRotationY = 0;
      sceneRef.current.rotationX = 0;
      sceneRef.current.rotationY = 0;
      sceneRef.current.targetZoom = 6.2;
    }
  };

  const toggleAutoRotate = () => {
    setIsRotating((prev) => !prev);
  };

  return (
    <div className={`relative w-full h-[400px] sm:h-[480px] rounded-2xl bg-gradient-to-br from-agri-pale/60 via-white to-emerald-50/40 border border-agri-border overflow-hidden select-none touch-none ${className}`}>
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-xs flex flex-col items-center justify-center space-y-3 z-20">
          <div className="w-10 h-10 rounded-full border-3 border-agri-accent border-t-transparent animate-spin" />
          <span className="text-xs font-bold text-agri-dark uppercase tracking-wider">
            Loading Interactive 3D Model...
          </span>
        </div>
      )}

      {/* Helper Badge Overlay */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="px-3 py-1 rounded-full bg-agri-dark/90 text-white font-extrabold text-[11px] shadow-sm flex items-center gap-1.5">
          <RotateCw className="w-3.5 h-3.5 text-agri-accent animate-spin-slow" />
          360° Interactive 3D Model
        </span>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 p-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-agri-border shadow-md">
        <button
          onClick={handleZoomIn}
          title="Zoom In (+)"
          className="p-2 rounded-lg hover:bg-agri-pale text-agri-dark transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          onClick={handleZoomOut}
          title="Zoom Out (−)"
          className="p-2 rounded-lg hover:bg-agri-pale text-agri-dark transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <button
          onClick={toggleAutoRotate}
          title="Toggle 360° Auto-Rotation"
          className={`p-2 rounded-lg transition-colors ${isRotating ? 'bg-agri-pale text-agri-primary font-bold' : 'hover:bg-agri-pale text-agri-dark'}`}
        >
          <RotateCw className="w-4 h-4" />
        </button>

        <button
          onClick={handleReset}
          title="Reset View"
          className="p-2 rounded-lg hover:bg-agri-pale text-agri-dark transition-colors border-l border-agri-border/60 ml-1 pl-2.5"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Drag Instruction Banner */}
      <div className="absolute bottom-4 left-4 z-10 hidden sm:block">
        <span className="text-[11px] font-semibold text-agri-muted bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-agri-border/60">
          💡 Drag mouse / finger to rotate bottle 360°
        </span>
      </div>
    </div>
  );
};
