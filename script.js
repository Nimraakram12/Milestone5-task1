var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //picture id
    var profilePictureInput = document.getElementById('profilePicture');
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var qualificationElement = document.getElementById('qualification');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //***
    var usernameElement = document.getElementById("username");
    if (profilePictureInput && nameElement && emailElement && phoneElement && qualificationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var qualification = qualificationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resume/".concat(username.replace(/\s+/g, ''), "_cv.html");
        //profile picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //create resume output
        var resumeOutput = "\n       <h1>Resume Preview</h1>\n       ".concat(profilePictureURL ? "<img src = \"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n       <p><strong>Name: </strong><span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n       <p><strong>Email: </strong><span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n       <p><strong>Phone Number:</strong><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n\n       <h2> Qualification:</h2>\n       <p id=\"edit-qualification\" class=\"editable\">").concat(qualification, "</p>\n\n       <h2>Experience:</h2>\n       <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n                            \n       <h2>Skills:</h2>\n       <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n       ");
        //**
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your 2024 Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            makeEditable();
        }
    }
    else {
        console.error('one or more outputelements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = 'currentValue';
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
