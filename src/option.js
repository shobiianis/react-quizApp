import { Button,Grid } from "@mui/material";
import { grid } from "@mui/system";


function ShowOption(props){

const {data,optionClick}=props;

return(
 
    <Grid container>
        {data && Array.isArray(data) && data.length>0 ? 
        data.map((item,i)=>{
            return <Grid key={i} item md={6}><Button  onClick={()=>{optionClick(item)}}>{item}</Button> </Grid>
        }) : null 
        }

    </Grid>

    )

}
export default ShowOption;