import React, {useState, useEffect} from 'react';
import Plus from '../SVG/Plus'
import './Window.css'

export default function Window(props) {
    const [open, setOpen] = useState(false);

    useEffect(()=> {
        if(props.show) {
            setOpen(props.show)
        }
    }, [props.show])

    function closeWindow() {
        setOpen(false)
    };

    return open ? <div className='backdrop flex-c'>
        <div className="h-75 w-75 window" >
            <div className="flex window-bar">
                <div className="w-50 flex-c jcont-start ">
                    <span>{props.title}</span>
                </div>
                <div className="w-50 flex-c jcont-end">
                    <Plus onClick={closeWindow} />
                </div>
            </div>
            <div className="w-100 window-cont">
                <props.content {...props}  close={closeWindow} />
            </div>
            
        </div>
    </div> : null
}