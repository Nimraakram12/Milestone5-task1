//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();
    //picture id
    const profilePictureInput= document.getElementById('profilePicture') as HTMLInputElement

    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const qualificationElement = document.getElementById('qualification') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    //***
    const usernameElement = document.getElementById("username") as HTMLInputElement;
    
    
    if (profilePictureInput && nameElement && emailElement && phoneElement && qualificationElement && experienceElement && skillsElement && usernameElement){
       const name = nameElement.value;
       const email = emailElement.value;
       const phone = phoneElement.value;
       const qualification = qualificationElement.value;
       const experience = experienceElement.value;
       const skills = skillsElement.value;
       const username = usernameElement.value;
       const uniquePath =`resume/${username.replace(/\s+/g,'')}_cv.html`

       //profile picture elements
       const profilePictureFile = profilePictureInput.files?.[0]
       const profilePictureURL = profilePictureFile? URL.createObjectURL(profilePictureFile): '';
       



       //create resume output
       const resumeOutput=`
       <h1>Resume Preview</h1>
       ${profilePictureURL?`<img src = "${profilePictureURL}" alt="Profile Picture" class="profilePicture">`:'' }
       <p><strong>Name: </strong><span id="edit-name" class="editable">${name}</span></p>
       <p><strong>Email: </strong><span id="edit-email" class="editable">${email}</span></p>
       <p><strong>Phone Number:</strong><span id="edit-phone" class="editable">${phone}</span></p>

       <h2> Qualification:</h2>
       <p id="edit-qualification" class="editable">${qualification}</p>

       <h2>Experience:</h2>
       <p id="edit-experience" class="editable">${experience}</p>
                            
       <h2>Skills:</h2>
       <p id="edit-skills" class="editable">${skills}</p>
       `;

      //**
       const downloadLink = document.createElement('a')
       downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
       downloadLink.download = uniquePath;
       downloadLink.textContent = 'Download Your 2024 Resume';
       

       const resumeOutputElement = document.getElementById('resumeOutput');
       if(resumeOutputElement){
           resumeOutputElement.innerHTML = resumeOutput
           
         resumeOutputElement.appendChild(downloadLink)

       makeEditable();
       }
   }   else{
           console.error('one or more outputelements are missing')
       }
   
});
function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element=>{
        element.addEventListener('click' , function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent||"";

            //replace content
            if (currentElement.tagName ==="P" || currentElement.tagName === 'SPAN'){
                const input  = document.createElement('input')
                input.type = 'text'
                input.value = 'currentValue'
                input.classList.add('editing-input')


                input.addEventListener('blur', function(){
                      currentElement.textContent = input.value;
                      currentElement.style.display = 'inline';
                      input.remove();
                      
                })




                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
            }
        })
    })
}