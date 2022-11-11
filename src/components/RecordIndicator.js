import { MdOutlineArrowDropDown } from 'react-icons/md'

const RecordIndicator = ({indexOfLast, dataTotal}) => {
    return (
        <div className="display">
            <span className="display-text1">Showing</span><span className="display-num">{indexOfLast}<MdOutlineArrowDropDown /></span><span className="display-text2">Out of {dataTotal}</span>
        </div>
    )
}

export default RecordIndicator