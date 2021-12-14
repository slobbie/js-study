// .modal__container{
//     width: 100%;
//     height: 100vh;
//     background-color: rgba(0,0,0,0.4);
//     z-index: 10;
//     position: fixed;
//     top: 0;
//     left: 0;

//     .modal{
//         width: 300px;
//         height: 150px;
//         background-color: #fff;
//         // Modal 창 브라우저 가운데로 조정
//         position: absolute;
//         left: 50%;
//         top:50%;
//         transform: translate(-50%, -50%);
//         z-index:100;

//         .modal__button{
//             position: relative;
//             left: 50%;
//             top:50%;
//             transform: translate(-50%, -50%);
//         }
//     }
// }


import React from 'react'
import './Modal.scss'

// Modal.jsx


const Modal = ({modalClose}) => {

    const onCloseModal = (e) => {
        console.log('e.target: ', e.target)
        console.log('e.tarcurrentTargetget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose()
        }

    }
    return (
        <div className="modal__container" onClick={onCloseModal}>
            <div className="modal">
                <button className="modal__button" onClick={modalClose}> Modal Close</button>
            </div>
        </div>
    )
}

export default Modal

