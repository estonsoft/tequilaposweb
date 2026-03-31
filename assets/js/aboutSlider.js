document.addEventListener('DOMContentLoaded', () => {
            const sliderHeading = document.getElementById('sliderHeading');
            const progressBar = document.getElementById('progressBar');
            const dots = document.querySelectorAll('.dot');
            const contentSlides = document.querySelectorAll('.content-slide');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            let currentStep = 0;
            const totalSteps = contentSlides.length;

            const updateSlider = () => {
                // Update heading based on current step
                if (currentStep === 0) {
                    sliderHeading.textContent = 'Our Vision';
                } else if (currentStep > 0 && currentStep <= 3) {
                    sliderHeading.textContent = 'Our Mission';
                } else {
                    sliderHeading.textContent = 'About Us';
                }

                // Update progress bar width
                const progressPercentage = (currentStep / (totalSteps - 1)) * 100;
                progressBar.style.width = `${progressPercentage}%`;

                // Update dots
                dots.forEach((dot, index) => {
                    dot.classList.remove('bg-gray-800', 'bg-gray-400');
                    if (index <= currentStep) {
                        dot.classList.add('bg-gray-800');
                    } else {
                        dot.classList.add('bg-gray-400');
                    }
                });

                // Update content visibility
                contentSlides.forEach((slide, index) => {
                    if (index === currentStep) {
                        slide.classList.remove('hidden', 'opacity-0');
                        slide.classList.add('opacity-100', 'fade-in');
                    } else {
                        slide.classList.add('hidden', 'opacity-0');
                        slide.classList.remove('opacity-100', 'fade-in');
                    }
                });
                
                // Update button states
                prevBtn.disabled = currentStep === 0;
                nextBtn.disabled = currentStep === totalSteps - 1;
                prevBtn.classList.toggle('text-gray-400', currentStep === 0);
                prevBtn.classList.toggle('text-gray-800', currentStep > 0);
                nextBtn.classList.toggle('text-gray-400', currentStep === totalSteps - 1);
                nextBtn.classList.toggle('text-gray-800', currentStep < totalSteps - 1);
            };

            prevBtn.addEventListener('click', () => {
                if (currentStep > 0) {
                    currentStep--;
                    updateSlider();
                }
            });

            nextBtn.addEventListener('click', () => {
                if (currentStep < totalSteps - 1) {
                    currentStep++;
                    updateSlider();
                }
            });

            // Initial state
            updateSlider();
        });