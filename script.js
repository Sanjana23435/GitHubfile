function validateForm() {
            let isValid = true;

            // Name validation
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            // Email validation
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required.';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Invalid email format.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Password validation (basic required check)
            const passwordInput = document.getElementById('password');
            const passwordError = document.getElementById('passwordError');
            if (passwordInput.value.trim() === '') {
                passwordError.textContent = 'Password is required.';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            // Gender validation (check if at least one radio button is selected)
            const genderRadios = document.querySelectorAll('input[name="gender"]');
            const genderError = document.getElementById('genderError');
            let genderSelected = false;
            genderRadios.forEach(radio => {
                if (radio.checked) {
                    genderSelected = true;
                }
            });
            if (!genderSelected) {
                genderError.textContent = 'Please select your gender.';
                isValid = false;
            } else {
                genderError.textContent = '';
            }

            // Field of Study validation
            const fieldSelect = document.getElementById('field');
            const fieldError = document.getElementById('fieldError');
            if (fieldSelect.value === '') {
                fieldError.textContent = 'Please select your field of study.';
                isValid = false;
            } else {
                fieldError.textContent = '';
            }

            return isValid;
        }