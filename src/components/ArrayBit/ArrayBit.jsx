const ArrayBit = ({index, arrayLength}) => {
    return ( 
        <div style={{
            width: 100/arrayLength + "%",
            height: index/arrayLength*100 + "%",
            backgroundColor: 'black',
            alignSelf: 'end'
        }}>
        </div>
     );
}
 
export default ArrayBit;