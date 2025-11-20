import React, { useRef, useEffect } from 'react';

const RainBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const maxDrops = 500; // Number of rain drops
    const drops = [];

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    class Drop {
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.length = getRandomArbitrary(10, 20);
        this.speed = getRandomArbitrary(2, 5);
        this.opacity = getRandomArbitrary(0.1, 0.4); // Semi-transparent
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = `rgba(174,194,224,${this.opacity})`; // Light blue color
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      update() {
        this.y += this.speed;
        if (this.y > H) {
          this.y = -this.length;
          this.x = Math.random() * W;
        }
      }
    }

    function init() {
      for (let i = 0; i < maxDrops; i++) {
        drops.push(new Drop());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < drops.length; i++) {
        drops[i].update();
        drops[i].draw();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default RainBackground;
