export const Contact = () =>
{
    const $submit = document.querySelector('.Form-Send-Button');

    $submit.addEventListener('click',(e)=>
    {
        e.preventDefault();
    
        (function(){
            emailjs.init("VZ9Kko9ZfhBhWKuUq")
        })();

        var params = 
        {
            sendername: document.querySelector(".Form-Name").value,
            senderemail: document.querySelector(".Form-Email").value,
            message: document.querySelector(".Form-Message").value
        }

        if(!params.sendername || !params.senderemail || !params.message) return;

        $submit.classList.add("Disable");

        var serviceID = "service_b0cdxrz";
        var templateID = "template_fb26n7l";

        emailjs.send(serviceID, templateID, params)
        .then(res=>
        {
            $submit.classList.remove("Disable");
            alert("Thanks for get in touch!!!");
        })
        .catch();
    })
}
