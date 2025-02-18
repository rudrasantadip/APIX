import { useGLTF } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, MeshStandardMaterial, Mesh } from 'three';


function ApixLogo() {
  const meshRef = useRef<Group>(null);

  // Load your 3D logo model
  const { scene } = useGLTF('src/components/Assets/apix_logo.glb'); // Replace with the path to your logo

  useFrame(() => {
    if (meshRef.current) {
      // Smooth rotation along Y-axis
      meshRef.current.rotation.z -= 0.005;
    }
  });

  // Set initial rotation to the desired default
  useMemo(() => {
    if (scene) {
      scene.rotation.set(Math.PI / 2, 0, 0); // Rotate 90 degrees along X-axis
    }
  }, [scene]);

  // Create a metallic material for highlights and shadows
  const metallicMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#FFFFF0', // Base color
        metalness: 0.7, // Adds reflection
        roughness: 0.3, // Smooth surface with some roughness
      }),
    []
  );

  // Apply the metallic material to all meshes in the scene
  useMemo(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        mesh.material = metallicMaterial; // Apply the metallic material
        mesh.material.needsUpdate = true; // Ensure the material updates
      }
    });
  }, [scene, metallicMaterial]);

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={0.07} // Adjust scale
      position={[0, 0, 0]} // Adjust position
    />
  );
}

export default ApixLogo;
