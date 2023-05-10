import Column from "../Column/Column";

import './canvas.css'
interface CanvasProps {
    array: number[];
}

const Canvas: React.FC<CanvasProps> = ({ array }) => {
    return (
        <div className="canvas">
            {array.map((value, idx) => {
                return (<Column key={idx} value={value} arrayLength={array.length} />)

            })}
        </div>
    )
}
export default Canvas