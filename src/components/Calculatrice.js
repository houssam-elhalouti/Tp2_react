import React, { useState } from 'react'
import './style.css';

function Calculatrice() {
    const [output, setoutput] = useState('');
    const afficher = (value)=> {
        setoutput(output + value)
    }
    const effacer = ()=>{
        setoutput('')
    }
    const calculer = ()=> {
        try{
            setoutput(eval(output).toString())
        }
        catch(erro) {
            setoutput("Erreur")
        }
    }
  return (
  
    <div className='calcul container mt-4'>
        <div className='calcul-simple'>
            <h1 className='text-center'>Calculatrice simple</h1>
            <div className="">
                <div className="row">
                <div class="col-9 form-group">
                    <input type="text" className="form-control" value={output} name="" readOnly ></input>
                </div>
                <div class="col-3 effacer ">
                    <button className='w-100 effacer' onClick={effacer}><i class="fa-solid fa-c"></i></button>
                </div>
                </div> 

                <div className="row">
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('1')}><i class="fa-solid fa-1"></i></button>
                    </div>
                    <div className="col-3">
                    <button className='w-100'onClick={()=> afficher('2')}><i class="fa-solid fa-2"></i></button>
                    </div>
                    <div className="col-3">
                    <button className='w-100'onClick={()=> afficher('3')}><i class="fa-solid fa-3"></i></button>
                    </div>
                    <div className="col-3">
                    <button className='w-100'onClick={()=> afficher('+')}><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button className='w-100'onClick={()=> afficher('4')}><i class="fa-solid fa-4"></i></button>
                    </div>
                    <div className="col-3">
                    <button className='w-100'onClick={()=> afficher('5')}><i class="fa-solid fa-5"></i></button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('6')}><i class="fa-solid fa-6"></i></button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('-')}><i class="fa-solid fa-minus"></i></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('7')}><i class="fa-solid fa-7"></i></button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('8')}><i class="fa-solid fa-8"></i></button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('9')}><i class="fa-solid fa-9"></i></button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('*')}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('.')}>.</button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('0')}><i class="fa-solid fa-0"></i></button>
                    </div>
                    <div className="col-3 equal">
                    <button onClick={calculer} className='w-100 '><i class="fa-solid fa-equals"></i></button>
                    </div>
                    <div className="col-3">
                    <button className='w-100' onClick={()=> afficher('/')}><i class="fa-solid fa-divide"></i></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
      
  )
}

export default Calculatrice