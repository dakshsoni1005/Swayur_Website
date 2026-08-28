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

  // Determine cap color based on prop or product slug (Default: BROWN #6B431C)
  const getCapColor = useCallback((): number => {
    if (capColor) {
      return parseInt(capColor.replace('#', '0x'), 16);
    }
    switch (product.slug) {
      case 'beauveria-bassiana':
        return 0xb51f24; // Deep Red (#B51F24)
      case 'pseudomonas-fluorescens':
        return 0x111111; // Charcoal Black (#111111)
      case 'mycorrhiza':
        return 0x6b431c; // Earth Brown (#6B431C)
      case 'bio-npk-consortia':
        return 0x167a3a; // Dark Forest Green (#167A3A)
      case 'bio-zsb':
        return 0xd97706; // Golden Mustard Yellow (#D97706)
      case 'trichoderma-viride':
        return 0x1d4ed8; // Royal Blue (#1D4ED8)
      default:
        return 0x6b431c; // Default Cap: BROWN
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

    // 1. Scene Setup (#F7F8F6 Background)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7f8f6);

    // 2. Camera Setup (Centered on Label & Bottle Geometry)
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.05, 100);
    camera.position.set(0, 1.25, 5.8);
    camera.lookAt(0, 1.25, 0);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    domContainer.appendChild(renderer.domElement);

    // 4. Studio Product Photography Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.15);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xf7f8f6, 0.65);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.85);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0001;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xdcfce7, 0.85);
    rimLight.position.set(-4, 5, -5);
    scene.add(rimLight);

    // 5. Single Main Model Group: AgriculturalBottle
    const bottleGroup = new THREE.Group();
    bottleGroup.name = 'AgriculturalBottle';
    scene.add(bottleGroup);

    // --- BottleBody (Procedural Lathe Profile for White HDPE Container) ---
    const points: THREE.Vector2[] = [];

    // Flat stable bottom
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.9, 0));
    // Rounded bottom bevel
    points.push(new THREE.Vector2(0.98, 0.08));
    points.push(new THREE.Vector2(1.0, 0.2));
    // Slightly tapered wide cylindrical main body
    points.push(new THREE.Vector2(1.0, 2.3));
    // Smooth rounded shoulder
    points.push(new THREE.Vector2(0.96, 2.5));
    points.push(new THREE.Vector2(0.75, 2.75));
    points.push(new THREE.Vector2(0.55, 2.95));
    // Short narrow neck
    points.push(new THREE.Vector2(0.52, 3.4));
    // Collar rim
    points.push(new THREE.Vector2(0.55, 3.45));
    points.push(new THREE.Vector2(0.55, 3.55));
    points.push(new THREE.Vector2(0.5, 3.6));
    points.push(new THREE.Vector2(0, 3.6));

    const bottleGeo = new THREE.LatheGeometry(points, 128); // 128 segments for smooth cylindrical geometry
    
    // White HDPE Plastic Material (#F5F5F2, Roughness 0.6, Metalness 0)
    const bottleMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f2,
      roughness: 0.6,
      metalness: 0.0,
    });

    const bottleMesh = new THREE.Mesh(bottleGeo, bottleMat);
    bottleMesh.name = 'BottleBody';
    bottleMesh.castShadow = true;
    bottleMesh.receiveShadow = true;
    bottleGroup.add(bottleMesh);

    // --- ScrewCap (Single Ribbed Cap) ---
    const capColorHex = getCapColor();
    const capGroup = new THREE.Group();
    capGroup.name = 'ScrewCap';
    capGroup.position.set(0, 3.28, 0);

    const capBodyGeo = new THREE.CylinderGeometry(0.58, 0.58, 0.55, 64);
    const capMat = new THREE.MeshStandardMaterial({
      color: capColorHex,
      roughness: 0.6,
      metalness: 0.0,
    });
    const capBodyMesh = new THREE.Mesh(capBodyGeo, capMat);
    capBodyMesh.castShadow = true;
    capGroup.add(capBodyMesh);

    // Vertical grip grooves around cap (32 ribs)
    const numRidges = 32;
    const ridgeGeo = new THREE.BoxGeometry(0.025, 0.5, 0.04);
    for (let i = 0; i < numRidges; i++) {
      const angle = (i / numRidges) * Math.PI * 2;
      const ridgeMesh = new THREE.Mesh(ridgeGeo, capMat);
      ridgeMesh.position.set(Math.sin(angle) * 0.58, 0, Math.cos(angle) * 0.58);
      ridgeMesh.rotation.y = angle;
      capGroup.add(ridgeMesh);
    }
    bottleGroup.add(capGroup);

    // --- Dedicated Label Cylinder & Dynamic Texture Mapping ---
    const textureLoader = new THREE.TextureLoader();
    const rawSrc = product.labelTexture || product.image;

    if (rawSrc) {
      const imageSrc = `${rawSrc}?v=20260829_v5`;
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
          const labelRadius = 1.008; // Offset slightly above bottle body to avoid z-fighting
          const labelGeo = new THREE.CylinderGeometry(labelRadius, labelRadius, labelHeight, 128, 1, true);

          const labelMat = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.4,
            metalness: 0.0,
            side: THREE.FrontSide,
          });

          const labelMesh = new THREE.Mesh(labelGeo, labelMat);
          labelMesh.name = 'LabelCylinder';
          labelMesh.position.set(0, 1.25, 0);
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
    } else {
      queueMicrotask(() => setIsLoading(false));
    }

    // --- Floor Soft Contact Shadow ---
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.25)');
      gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.10)');
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
    shadowMesh.position.y = -0.58;
    scene.add(shadowMesh);

    // Center bottle perfectly in viewer
    bottleGroup.position.set(0, -0.55, 0);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      bottleGroup,
      targetRotationX: 0,
      targetRotationY: 0,
      rotationX: 0,
      rotationY: 0,
      targetZoom: 5.8,
      zoom: 5.8,
      isDragging: false,
      previousMousePosition: { x: 0, y: 0 },
      animId: 0,
    };

    // --- Render & Animation Loop ---
    let autoRotateAngle = 0;
    const animate = () => {
      if (!sceneRef.current) return;
      const ref = sceneRef.current;

      // Smooth damping interpolation
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

    // --- Touch & Pointer Controls ---
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
      sceneRef.current.targetRotationX = Math.max(-0.3, Math.min(0.3, sceneRef.current.targetRotationX + deltaY * 0.008));

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
      sceneRef.current.targetZoom = Math.max(4.2, Math.min(8.5, sceneRef.current.targetZoom + zoomDelta));
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
      sceneRef.current.targetZoom = Math.max(4.2, sceneRef.current.targetZoom - 1.0);
    }
  };

  const handleZoomOut = () => {
    if (sceneRef.current) {
      sceneRef.current.targetZoom = Math.min(8.5, sceneRef.current.targetZoom + 1.0);
    }
  };

  const handleReset = () => {
    if (sceneRef.current) {
      sceneRef.current.targetRotationX = 0;
      sceneRef.current.targetRotationY = 0;
      sceneRef.current.rotationX = 0;
      sceneRef.current.rotationY = 0;
      sceneRef.current.targetZoom = 5.8;
    }
  };

  const toggleAutoRotate = () => {
    setIsRotating((prev) => !prev);
  };

  return (
    <div className={`relative w-full h-[420px] sm:h-[500px] rounded-2xl bg-[#F7F8F6] border border-agri-border overflow-hidden select-none touch-none ${className}`}>
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#F7F8F6]/90 backdrop-blur-xs flex flex-col items-center justify-center space-y-3 z-20">
          <div className="w-10 h-10 rounded-full border-3 border-agri-accent border-t-transparent animate-spin" />
          <span className="text-xs font-bold text-agri-dark uppercase tracking-wider">
            Loading Interactive 3D Model...
          </span>
        </div>
      )}

      {/* Top Helper Badge */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
        <span className="px-3 py-1 rounded-full bg-agri-dark/90 text-white font-extrabold text-[11px] shadow-xs flex items-center gap-1.5 backdrop-blur-xs">
          <RotateCw className="w-3.5 h-3.5 text-agri-accent animate-spin-slow" />
          360° Interactive 3D Model
        </span>
      </div>

      {/* Compact Interactive Controls Overlay */}
      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 p-1 rounded-xl bg-white/95 backdrop-blur-md border border-agri-border shadow-sm">
        <button
          onClick={handleZoomIn}
          title="Zoom In (+)"
          className="p-1.5 rounded-lg hover:bg-agri-pale text-agri-dark transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          onClick={handleZoomOut}
          title="Zoom Out (−)"
          className="p-1.5 rounded-lg hover:bg-agri-pale text-agri-dark transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <button
          onClick={toggleAutoRotate}
          title="Toggle 360° Auto-Rotation"
          className={`p-1.5 rounded-lg transition-colors ${isRotating ? 'bg-agri-pale text-agri-primary font-bold' : 'hover:bg-agri-pale text-agri-dark'}`}
        >
          <RotateCw className="w-4 h-4" />
        </button>

        <button
          onClick={handleReset}
          title="Reset View"
          className="p-1.5 rounded-lg hover:bg-agri-pale text-agri-dark transition-colors border-l border-agri-border/60 ml-0.5 pl-2"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Drag Instruction Banner */}
      <div className="absolute bottom-3 left-3 z-10 hidden sm:block">
        <span className="text-[11px] font-semibold text-agri-muted bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-agri-border/60 shadow-2xs">
          💡 Drag mouse / finger to rotate bottle 360°
        </span>
      </div>
    </div>
  );
};
