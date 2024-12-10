import { Typography , Button } from '@mui/material'
import Applyleave from '../applyleave/applyleave'
import Viewleave from '../viewleave/viewleaves'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Balancetable from '../leavebalance/balancetable'
import History from '../leavehistory/history'

import './leavehome.css'

const Leavehome = () =>{

    const navigate = useNavigate()
    const {name}  = useParams()
    console.log(name)
    const [leaveActiveButton , setLeaveActiveButton ] = useState("")
    
    useEffect( () => {
        setLeaveActiveButton(name)
    }, [name])

    console.log(leaveActiveButton);

    return (
        <div className = "leave-home-container">
            <div className = "leave-tab-container">
                <img src='/VAICSLogo.png' className='leave-logo'/>
                <hr className='leave-hr'/>

                <Typography variant='body1' paragraph sx={{
                    fontSize : "20px",
                    margin : "10px",
                    textAlign : "center",
                    fontWeight : "900",
                }}>Leave Menu</Typography>

                <Button  onClick = {() => {setLeaveActiveButton("Apply-Leave"); navigate("/Leave/Apply-Leave")}} 
                variant="contained" sx = {{
                    backgroundColor : "#FFD580",
                    color : "black",
                    margin : "10px",
                    marginTop : "20px",
                    width : "130px"
                }}>
                    Apply Leave 
                </Button>

                <Button onClick = {() => {setLeaveActiveButton("View-Leave"); navigate("/Leave/View-Leave")}} 
                 variant="contained" sx = {{
                    backgroundColor : "#FFD580",
                    color : "black",
                    margin : "10px",
                    marginTop : "20px",
                    width : "130px"
                }}>
                   Balance
                </Button>

                <Button onClick = {() => {setLeaveActiveButton("History"); navigate("/Leave/History")}} 
                 variant="contained" sx = {{
                    backgroundColor : "#FFD580",
                    color : "black",
                    margin : "10px",
                    marginTop : "20px",
                    width : "130px"
                }}>
                      History
                </Button>

                <Button onClick = {() => {setLeaveActiveButton("Main-Menu") ; navigate("/shome")}}  
                 variant="contained" sx = {{
                    backgroundColor : "#FFD580",
                    color : "black",
                    margin : "10px",
                    marginTop : "20px",
                    width : "130px"
                }}>
                    Main Menu
                </Button>
            </div>

            <div className='leave-content'>
               {leaveActiveButton === "Apply-Leave" && <Applyleave/>}
               {leaveActiveButton === "View-Leave" && <Balancetable/>}
               {leaveActiveButton === "Balance" && <Viewleave/>}
               {leaveActiveButton === "History" && <History/>}
            </div>
        </div>
    )
}

export default Leavehome