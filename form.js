const $submit = document.querySelector('#Form-Send-Button');

const SetupForm = () =>
{
    $submit.addEventListener('click',(e)=>
    {
        e.preventDefault();
    
        const name = document.querySelector('#Form-Name').value;
        const mail = document.querySelector('#Form-Email').value;
        const message = document.querySelector('#Form-Message').value;
        const subject = "Hi 👋";

        if(!name || !mail) return;
    
        window.location.href=`mailto:nicolasfelipedipierro@gmail.com?subject=${subject}&body=Nombre%3A${name}%0ACorreo%3A${mail}%0AMensaje%3A${message}`;
    });
}

export default SetupForm;
