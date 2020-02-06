<?php

//receives data from validate.js ajax and post to frontend
$msg = $_POST['syncope-val'];
$msg2 = $_POST['angina-val'];
$msg3 = $_POST['dyspnea-val'];
$msg4 = $_POST['fever-val'];

	 if ('$msg')

{
	
	echo "Thank you for completing our survey.</p>";
	
$score = $msg +  $msg2 +  $msg3 +  $msg4;

//echo $score; 

if ($msg >= 2)
	
	{
		//send email if alarm # triggered
		echo "Syncope alarm triggered - Email sent ".$msg;
	}
	
	if ($msg2 >= 1)
	
	{
		//send email if alarm # triggered
		echo "</p> Angina alarm triggered - Email sent ".$msg2;
	}
	
	if ($msg3 >= 1)
	
	{
		//send email if alarm # triggered
		echo "</p> Dyspnea alarm triggered - Email sent ".$msg3;
	}
	
		if ($msg4 >= 1)
	
	{
		//send email if alarm # triggered
		echo "</p>Fever alarm triggered - Email sent ".$msg4;
	}
	


//$sql1 ="INSERT INTO survey_response (score, points, score_id)
    //VALUES ('$score', '$points', '$scoreid')";


 
 	//if ($conn->query($sql1) === TRUE) {
   // echo $tech.": ".$msg;
//} else {
    //echo "Error: " . $sql1 . "<br>" . $conn->error;
//}
}