import M from 'materialize-css';
const PopUp= {
    exibeMensagem: (status, msg) =>{

        if(status === 'success'){
            M.toast({html: msg, clases: 'green', displayLength: 2000})
        }

        if (status === 'error'){
            M.toast({html: msg, clases: 'red', displayLength: 2000})

        }

    }
}

export default PopUp;