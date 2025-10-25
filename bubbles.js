function createBubbles() {
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(container => {
        const bubblesContainer = document.createElement('div');
        bubblesContainer.className = 'bubbles';
        container.appendChild(bubblesContainer);
        
        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            
            // JavaScript aplica estilos individuales
            const size = Math.random() * 30 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.animationDelay = `${Math.random() * 5}s`;
            bubble.style.animationDuration = `${Math.random() * 3 + 4}s`;
            
            bubblesContainer.appendChild(bubble);
        }
    });
}

document.addEventListener('DOMContentLoaded', createBubbles);