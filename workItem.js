const $workItems = document.querySelectorAll(".Work-Item");
const $workExtend = document.querySelector(".Work-Extend");
const $workExtendCloseBtn = document.querySelector(".Work-Extend-Close");
const $WorkGallery = document.querySelector("#Works-Panel");

const SetupWorkExtend = () =>
{
    $workExtendCloseBtn.addEventListener("click",()=>
    {
        $WorkGallery.classList.remove("Hidden");
        $workExtend.classList.remove("Visible");
    });
}

const SetupWorkItems = () =>
{
    SetupWorkExtend();

    $workItems.forEach(workItem => 
        {
            workItem.addEventListener("click",(e)=>
            {
                console.log(e);
                
                $WorkGallery.classList.add("Hidden");
                $workExtend.classList.add("Visible");
            });
        })
}

export default SetupWorkItems;