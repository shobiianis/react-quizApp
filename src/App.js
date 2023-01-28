import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import showOption from "./option";


function App() {
 const [quizData,setQuizData]=useState({
  quizName:"React quiz",
  totalMarks:60,
  perQuestionMarks:10,
  quiz:[ {
    question: "Html Stands For____________________________",
    options: [
      "Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language",
    ],
    correctAns: "Hypertext markup language",
  },
  {
    question: "Css Stands For _______________________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "Js Stands For _______________________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "Dom Stands For _______________________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "Ram Stands For _______________________",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "Rom Stands For _______________________",
    options: [
      "Hyper Text Markup Language",
      "html",
      "HTml",
      "Read Only Memory",
    ],
    correctAns: "Read Only Memory",
  }]
 })
  
 const {quizName,question,totalMarks,perQuestionMarks}=quizData;
 const [indexNumber,setIndexNumber]=useState(0)


  return (
    
   <Box>
    <Typography variant="h2" align="center" sx={{color:"orange" ,fontFamily:"fantasy" ,backgroundColor:"black"}}  >QUIZ APP</Typography>
    <Box display={"flex"}  justifyContent= {'space-between'}   backgroundColor={"#219ebc"} height={60} >
    <Typography fontFamily={"-apple-system"} variant="h5" mx={10} pt={2} >Current Question</Typography>
    <Typography fontFamily={"-apple-system"} variant="h5" mx={10}  pt={2} >Total Questions</Typography>
    </Box>

    <Box width={"100%"} textAlign={"center"} pt={2}  height={100} backgroundColor={"#a2d2ff"}>
    <Typography variant="h5" color={"#003049"} fontWeight={900} fontFamily={"-apple-system"}>NAME OF CANDIDATE :    <br/> MARKS OBTAINED :</Typography>
    </Box>


    {/* Answer box starts here */}
     <Box mt={3}>
      

     <showOption label={data } />


    

     </Box>
   
  

 
       
   

      

   </Box>
    
    
    
    );
}

export default App;
