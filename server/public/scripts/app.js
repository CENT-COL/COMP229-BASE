// IIFE  -- Imediately Invoked Function Expression

(()=>{
    const start = () => {
        console.log("App Started...");
        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons){
           if (!confirm("Are you sure?")) {
                event.preventDefault();                
           }
        }
    }

    window.addEventListener('load', start);
})();