/*hey hello*/
function feth(){
    var c = document.getElementById("camera");
    var camjs = c.value;
    var r = document.getElementById("rovr_sel");
    var rovrjs = r.value;


/*Curiosity vars ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↘↙↖↗↙↖↙↘↙↖↗↝*/
    var imgmastc = ["1_mast (1).png", "1_mast (2).png", "1_mast (3).png", "1_mast (4).png", "1_mast (5).png", "1_mast (6).png", "1_mast (7).png", "1_mast (8).png", "1_mast (9).png", "1_mast (10).png"];
    var imgnavc = ["1_navcam (1).jpg", "1_navcam (2).jpg", "1_navcam (3).jpg", "1_navcam (4).jpg", "1_navcam (5).jpg", "1_navcam (6).jpg", "1_navcam (7).jpg", "1_navcam (8).jpg", "1_navcam (9).jpg", "1_navcam (10).jpg"];
    var imgfhazc = ["1_fhaz (1).jpg", "1_fhaz (2).jpg"];
    var imgrhazc = ["1_rhaz (1).jpg", "1_rhaz (2).jpg"];
    var imgchemc = ["1_chem (1).jpg", "1_chem (2).jpg", "1_chem (3).png", "1_chem (4).png"];


    /*spirit vars ---------------------------------------------------------------------------------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↖↗↘↙↗↖↙↘↗↖↙↘↗↖↙↘↗↖↙↘↗↖↙↘↝*/

    var imgnavcams = ["3_navcam (1).jpg","3_navcam (2).jpg","3_navcam (3).jpg","3_navcam (4).jpg","3_navcam (5).jpg"];
    var imgpancams = ["3_pancam (1).jpg", "3_pancam (2).jpg"];


    /*Opportunity vars ---------------------------------------------------------------------------------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↖↗↘↙↗↖↙↘↗↖↙↘↗↖↙↘↗↖↙↘↗↖↙↘↝*/

    var imgpancamo = ["2_pancam (1).jpg","2_pancam (2).jpg","2_pancam (3).jpg","2_pancam (4).jpg"];
    var imgnavcamo = ["2_navcam (1).jpg", "2_navcam (2).jpg"];





/*Curiosity codes ◆ ▼▼▼▼▼*/
    if (camjs === "mast"){
    if ( rovrjs === "curiosity"){
        document.getElementById("img1").src= imgmastc[0];
        document.getElementById("img2").src= imgmastc[1];
        document.getElementById("img3").src= imgmastc[2];
        document.getElementById("img4").src= imgmastc[3];
        document.getElementById("img5").src= imgmastc[4];
        document.getElementById("img6").src= imgmastc[5];
        document.getElementById("img7").src= imgmastc[6];
        document.getElementById("img8").src= imgmastc[7];
        document.getElementById("img9").src= imgmastc[8];
        document.getElementById("img10").src= imgmastc[9];
     }
    }

    if (camjs === "navcam"){
        if (rovrjs === "curiosity"){
            document.getElementById("img1").src= imgnavc[0];
            document.getElementById("img2").src= imgnavc[1];
            document.getElementById("img3").src= imgnavc[2];
            document.getElementById("img4").src= imgnavc[3];
            document.getElementById("img5").src= imgnavc[4];
            document.getElementById("img6").src= imgnavc[5];
            document.getElementById("img7").src= imgnavc[6];
            document.getElementById("img8").src= imgnavc[7];
            document.getElementById("img9").src= imgnavc[8];
            document.getElementById("img10").src= imgnavc[9];
       
        }
    }


    if (camjs === "fhaz"){
        if (rovrjs === "curiosity"){
            document.getElementById("img1").src= imgfhazc[0];
            document.getElementById("img2").src= imgfhazc[1];
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img3").alt= "Only two images available for this cam"
            document.getElementById("img4").alt= "only two images available for this cam";
            document.getElementById("img5").alt= "only two images available for this cam";
            document.getElementById("img6").alt= "only two images available for this cam";
            document.getElementById("img7").alt= "only two images available for this cam";
            document.getElementById("img8").alt= "only two images available for this cam";
            document.getElementById("img9").alt= "only two images available for this cam";
            document.getElementById("img10").alt= "only two images available for this cam";
       
        }
    }
    if (camjs === "rhaz"){
        if (rovrjs === "curiosity"){
            document.getElementById("img1").src= imgrhazc[0];
            document.getElementById("img2").src= imgrhazc[1];
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img3").alt= "Only two images available for this cam"
            document.getElementById("img4").alt= "only two images available for this cam";
            document.getElementById("img5").alt= "only two images available for this cam";
            document.getElementById("img6").alt= "only two images available for this cam";
            document.getElementById("img7").alt= "only two images available for this cam";
            document.getElementById("img8").alt= "only two images available for this cam";
            document.getElementById("img9").alt= "only two images available for this cam";
            document.getElementById("img10").alt= "only two images available for this cam";
       
        }
    }
    if (camjs === "chemcam"){
        if (rovrjs === "curiosity"){
            document.getElementById("img1").src= imgchemc[0];
            document.getElementById("img2").src= imgchemc[1];
            document.getElementById("img3").src= imgchemc[2];
            document.getElementById("img4").src= imgchemc[3]; 
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img9").alt= "Only four images available for this cam"
            document.getElementById("img10").alt= "only four images available for this cam";
            document.getElementById("img5").alt= "only four images available for this cam";
            document.getElementById("img6").alt= "only four images available for this cam";
            document.getElementById("img7").alt= "only four images available for this cam";
            document.getElementById("img8").alt= "only four images available for this cam";

        }
    }

    if (camjs === "mardi"){
        if (rovrjs === "curiosity"){ 
        document.getElementById("img3").src= "";
        document.getElementById("img4").src= "";
        document.getElementById("img5").src= "";
        document.getElementById("img6").src= "";
        document.getElementById("img7").src= "";
        document.getElementById("img8").src= "";
        document.getElementById("img9").src= "";
        document.getElementById("img10").src= "";
        document.getElementById("img2").src= "";
        document.getElementById("img1").src= "";
            document.getElementById("img1").src= "No picture available for this cam";
            document.getElementById("img2").src= "No picture available for this cam";
            document.getElementById("img3").alt= "No picture available for this cam";
            document.getElementById("img4").alt= "no picture available for this cam";
            document.getElementById("img5").alt= "no picture available for this cam";
            document.getElementById("img6").alt= "no picture available for this cam";
            document.getElementById("img7").alt= "no picture available for this cam";
            document.getElementById("img8").alt= "no picture available for this cam";
            document.getElementById("img9").alt= "no picture available for this cam";
            document.getElementById("img10").alt= "no picture available for this cam";
       
        }
    }
    if (camjs === "mahli"){
        if (rovrjs === "curiosity"){
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img2").src= "";
            document.getElementById("img1").src= "";
            document.getElementById("img1").src= "No picture available for this cam";
            document.getElementById("img2").src= "No picture available for this cam";
            document.getElementById("img3").alt= "No picture available for this cam";
            document.getElementById("img4").alt= "no picture available for this cam";
            document.getElementById("img5").alt= "no picture available for this cam";
            document.getElementById("img6").alt= "no picture available for this cam";
            document.getElementById("img7").alt= "no picture available for this cam";
            document.getElementById("img8").alt= "no picture available for this cam";
            document.getElementById("img9").alt= "no picture available for this cam";
            document.getElementById("img10").alt= "no picture available for this cam";
       
        }
    }

    if (camjs === "minites"){
        if (rovrjs === "curiosity"){
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img2").src= "";
            document.getElementById("img1").src= "";
            document.getElementById("img1").src= "No picture available for this cam";
            document.getElementById("img2").src= "No picture available for this cam";
            document.getElementById("img3").alt= "No picture available for this cam";
            document.getElementById("img4").alt= "no picture available for this cam";
            document.getElementById("img5").alt= "no picture available for this cam";
            document.getElementById("img6").alt= "no picture available for this cam";
            document.getElementById("img7").alt= "no picture available for this cam";
            document.getElementById("img8").alt= "no picture available for this cam";
            document.getElementById("img9").alt= "no picture available for this cam";
            document.getElementById("img10").alt= "no picture available for this cam";
       
        }
    }

    if (camjs === "pancam"){
        if (rovrjs === "curiosity"){
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img2").src= "";
            document.getElementById("img1").src= "";
            document.getElementById("img1").src= "No picture available for this cam";
            document.getElementById("img2").src= "No picture available for this cam";
            document.getElementById("img3").alt= "No picture available for this cam";
            document.getElementById("img4").alt= "no picture available for this cam";
            document.getElementById("img5").alt= "no picture available for this cam";
            document.getElementById("img6").alt= "no picture available for this cam";
            document.getElementById("img7").alt= "no picture available for this cam";
            document.getElementById("img8").alt= "no picture available for this cam";
            document.getElementById("img9").alt= "no picture available for this cam";
            document.getElementById("img10").alt= "no picture available for this cam";
       
        }
    }

    /*Spirit codes ◆ ▼▼▼▼▼*/

    if (camjs === "navcam"){
        if (rovrjs === "spirit"){
            document.getElementById("img1").src= imgnavcams[0];
            document.getElementById("img2").src= imgnavcams[1];
            document.getElementById("img3").src= imgnavcams[2];
            document.getElementById("img4").src= imgnavcams[3];
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img5").src= imgnavcams[4];
            document.getElementById("img6").alt= "only 5 pictures available for this cam";
            document.getElementById("img7").alt= "only 5 pictures available for this cam";
            document.getElementById("img8").alt= "only 5 pictures available for this cam";
            document.getElementById("img9").alt= "only 5 pictures available for this cam";
            document.getElementById("img10").alt= "only 5 pictures available for this cam";
        }
    }

    if (camjs === "pancam"){
        if (rovrjs === "spirit"){
            document.getElementById("img1").src= imgpancams[0];
            document.getElementById("img2").src= imgpancams[1];
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img3").alt= "Only two images available for this cam"
            document.getElementById("img4").alt= "only two images available for this cam";
            document.getElementById("img5").alt= "only two images available for this cam";
            document.getElementById("img6").alt= "only two images available for this cam";
            document.getElementById("img7").alt= "only two images available for this cam";
            document.getElementById("img8").alt= "only two images available for this cam";
            document.getElementById("img9").alt= "only two images available for this cam";
            document.getElementById("img10").alt= "only two images available for this cam";
       
        }
    }

    if (camjs === "fhaz"){
        if (rovrjs === "spirit"){
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img2").src= "";
            document.getElementById("img1").src= "";
            document.getElementById("img1").src= "No picture available for this cam";
            document.getElementById("img2").src= "No picture available for this cam";
            document.getElementById("img3").alt= "No picture available for this cam";
            document.getElementById("img4").alt= "no picture available for this cam";
            document.getElementById("img5").alt= "no picture available for this cam";
            document.getElementById("img6").alt= "no picture available for this cam";
            document.getElementById("img7").alt= "no picture available for this cam";
            document.getElementById("img8").alt= "no picture available for this cam";
            document.getElementById("img9").alt= "no picture available for this cam";
            document.getElementById("img10").alt= "no picture available for this cam";
       
        }
    }
    if (camjs === "rhaz"){
        if (rovrjs === "spirit"){
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img2").src= "";
            document.getElementById("img1").src= "";
            document.getElementById("img1").src= "No picture available for this cam";
            document.getElementById("img2").src= "No picture available for this cam";
            document.getElementById("img3").alt= "No picture available for this cam";
            document.getElementById("img4").alt= "no picture available for this cam";
            document.getElementById("img5").alt= "no picture available for this cam";
            document.getElementById("img6").alt= "no picture available for this cam";
            document.getElementById("img7").alt= "no picture available for this cam";
            document.getElementById("img8").alt= "no picture available for this cam";
            document.getElementById("img9").alt= "no picture available for this cam";
            document.getElementById("img10").alt= "no picture available for this cam";
       
        }
    }
    if (camjs === "chemcam"){
        if (rovrjs === "spirit"){
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img2").src= "";
            document.getElementById("img1").src= "";
            document.getElementById("img1").src= "No picture available for this cam";
            document.getElementById("img2").src= "No picture available for this cam";
            document.getElementById("img3").alt= "No picture available for this cam";
            document.getElementById("img4").alt= "no picture available for this cam";
            document.getElementById("img5").alt= "no picture available for this cam";
            document.getElementById("img6").alt= "no picture available for this cam";
            document.getElementById("img7").alt= "no picture available for this cam";
            document.getElementById("img8").alt= "no picture available for this cam";
            document.getElementById("img9").alt= "no picture available for this cam";
            document.getElementById("img10").alt= "no picture available for this cam";
       
        }
    }
    if (camjs === "minites"){
        if (rovrjs === "spirit"){
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img2").src= "";
            document.getElementById("img1").src= "";
            document.getElementById("img1").src= "No picture available for this cam";
            document.getElementById("img2").src= "No picture available for this cam";
            document.getElementById("img3").alt= "No picture available for this cam";
            document.getElementById("img4").alt= "no picture available for this cam";
            document.getElementById("img5").alt= "no picture available for this cam";
            document.getElementById("img6").alt= "no picture available for this cam";
            document.getElementById("img7").alt= "no picture available for this cam";
            document.getElementById("img8").alt= "no picture available for this cam";
            document.getElementById("img9").alt= "no picture available for this cam";
            document.getElementById("img10").alt= "no picture available for this cam";
       
        }
    }
    if (camjs === "mahli"){
        if (rovrjs === "spirit"){
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img2").src= "";
            document.getElementById("img1").src= "";
            document.getElementById("img1").src= "No picture available for this cam";
            document.getElementById("img2").src= "No picture available for this cam";
            document.getElementById("img3").alt= "No picture available for this cam";
            document.getElementById("img4").alt= "no picture available for this cam";
            document.getElementById("img5").alt= "no picture available for this cam";
            document.getElementById("img6").alt= "no picture available for this cam";
            document.getElementById("img7").alt= "no picture available for this cam";
            document.getElementById("img8").alt= "no picture available for this cam";
            document.getElementById("img9").alt= "no picture available for this cam";
            document.getElementById("img10").alt= "no picture available for this cam";
       
        }
    }

    if (camjs === "mardi"){
        if (rovrjs === "spirit"){
            document.getElementById("img3").src= "";
            document.getElementById("img4").src= "";
            document.getElementById("img5").src= "";
            document.getElementById("img6").src= "";
            document.getElementById("img7").src= "";
            document.getElementById("img8").src= "";
            document.getElementById("img9").src= "";
            document.getElementById("img10").src= "";
            document.getElementById("img2").src= "";
            document.getElementById("img1").src= "";
            document.getElementById("img1").src= "No picture available for this cam";
            document.getElementById("img2").src= "No picture available for this cam";
            document.getElementById("img3").alt= "No picture available for this cam";
            document.getElementById("img4").alt= "no picture available for this cam";
            document.getElementById("img5").alt= "no picture available for this cam";
            document.getElementById("img6").alt= "no picture available for this cam";
            document.getElementById("img7").alt= "no picture available for this cam";
            document.getElementById("img8").alt= "no picture available for this cam";
            document.getElementById("img9").alt= "no picture available for this cam";
            document.getElementById("img10").alt= "no picture available for this cam";
       
        }
    }



/*opportunity codes ◆ ▼▼▼▼▼*/

if (camjs === "pancam"){
    if (rovrjs === "opportunity"){
        document.getElementById("img1").src= imgpancamo[0];
        document.getElementById("img2").src= imgpancamo[1];
        document.getElementById("img3").src= imgpancamo[2];
        document.getElementById("img4").src= imgpancamo[3]; 
        document.getElementById("img5").src= "";
        document.getElementById("img6").src= "";
        document.getElementById("img7").src= "";
        document.getElementById("img8").src= "";
        document.getElementById("img9").src= "";
        document.getElementById("img10").src= "";
        document.getElementById("img9").alt= "Only four images available for this cam"
        document.getElementById("img10").alt= "only four images available for this cam";
        document.getElementById("img5").alt= "only four images available for this cam";
        document.getElementById("img6").alt= "only four images available for this cam";
        document.getElementById("img7").alt= "only four images available for this cam";
        document.getElementById("img8").alt= "only four images available for this cam";

    }
} 



  if (camjs === "navcam"){
    if (rovrjs === "opportunity"){
        document.getElementById("img1").src= imgnavcamo[0];
        document.getElementById("img2").src= imgnavcamo[1];
        document.getElementById("img3").src= "";
        document.getElementById("img4").src= "";
        document.getElementById("img5").src= "";
        document.getElementById("img6").src= "";
        document.getElementById("img7").src= "";
        document.getElementById("img8").src= "";
        document.getElementById("img9").src= "";
        document.getElementById("img10").src= "";
        document.getElementById("img3").alt= "Only two images available for this cam"
        document.getElementById("img4").alt= "only two images available for this cam";
        document.getElementById("img5").alt= "only two images available for this cam";
        document.getElementById("img6").alt= "only two images available for this cam";
        document.getElementById("img7").alt= "only two images available for this cam";
        document.getElementById("img8").alt= "only two images available for this cam";
        document.getElementById("img9").alt= "only two images available for this cam";
        document.getElementById("img10").alt= "only two images available for this cam";
   
    }
  }

  if (camjs === "fhaz"){
    if (rovrjs === "opportunity"){
        document.getElementById("img3").src= "";
        document.getElementById("img4").src= "";
        document.getElementById("img5").src= "";
        document.getElementById("img6").src= "";
        document.getElementById("img7").src= "";
        document.getElementById("img8").src= "";
        document.getElementById("img9").src= "";
        document.getElementById("img10").src= "";
        document.getElementById("img2").src= "";
        document.getElementById("img1").src= "";
        document.getElementById("img1").src= "No picture available for this cam";
        document.getElementById("img2").src= "No picture available for this cam";
        document.getElementById("img3").alt= "No picture available for this cam";
        document.getElementById("img4").alt= "no picture available for this cam";
        document.getElementById("img5").alt= "no picture available for this cam";
        document.getElementById("img6").alt= "no picture available for this cam";
        document.getElementById("img7").alt= "no picture available for this cam";
        document.getElementById("img8").alt= "no picture available for this cam";
        document.getElementById("img9").alt= "no picture available for this cam";
        document.getElementById("img10").alt= "no picture available for this cam";
   
    }
}
if (camjs === "rhaz"){
    if (rovrjs === "opportunity"){
        document.getElementById("img3").src= "";
        document.getElementById("img4").src= "";
        document.getElementById("img5").src= "";
        document.getElementById("img6").src= "";
        document.getElementById("img7").src= "";
        document.getElementById("img8").src= "";
        document.getElementById("img9").src= "";
        document.getElementById("img10").src= "";
        document.getElementById("img2").src= "";
        document.getElementById("img1").src= "";
        document.getElementById("img1").src= "No picture available for this cam";
        document.getElementById("img2").src= "No picture available for this cam";
        document.getElementById("img3").alt= "No picture available for this cam";
        document.getElementById("img4").alt= "no picture available for this cam";
        document.getElementById("img5").alt= "no picture available for this cam";
        document.getElementById("img6").alt= "no picture available for this cam";
        document.getElementById("img7").alt= "no picture available for this cam";
        document.getElementById("img8").alt= "no picture available for this cam";
        document.getElementById("img9").alt= "no picture available for this cam";
        document.getElementById("img10").alt= "no picture available for this cam";
   
    }
}
if (camjs === "chemcam"){
    if (rovrjs === "opportunity"){
        document.getElementById("img3").src= "";
        document.getElementById("img4").src= "";
        document.getElementById("img5").src= "";
        document.getElementById("img6").src= "";
        document.getElementById("img7").src= "";
        document.getElementById("img8").src= "";
        document.getElementById("img9").src= "";
        document.getElementById("img10").src= "";
        document.getElementById("img2").src= "";
        document.getElementById("img1").src= "";
        document.getElementById("img1").src= "No picture available for this cam";
        document.getElementById("img2").src= "No picture available for this cam";
        document.getElementById("img3").alt= "No picture available for this cam";
        document.getElementById("img4").alt= "no picture available for this cam";
        document.getElementById("img5").alt= "no picture available for this cam";
        document.getElementById("img6").alt= "no picture available for this cam";
        document.getElementById("img7").alt= "no picture available for this cam";
        document.getElementById("img8").alt= "no picture available for this cam";
        document.getElementById("img9").alt= "no picture available for this cam";
        document.getElementById("img10").alt= "no picture available for this cam";
   
    }
}
if (camjs === "minites"){
    if (rovrjs === "opportunity"){
        document.getElementById("img3").src= "";
        document.getElementById("img4").src= "";
        document.getElementById("img5").src= "";
        document.getElementById("img6").src= "";
        document.getElementById("img7").src= "";
        document.getElementById("img8").src= "";
        document.getElementById("img9").src= "";
        document.getElementById("img10").src= "";
        document.getElementById("img2").src= "";
        document.getElementById("img1").src= "";
        document.getElementById("img1").src= "No picture available for this cam";
        document.getElementById("img2").src= "No picture available for this cam";
        document.getElementById("img3").alt= "No picture available for this cam";
        document.getElementById("img4").alt= "no picture available for this cam";
        document.getElementById("img5").alt= "no picture available for this cam";
        document.getElementById("img6").alt= "no picture available for this cam";
        document.getElementById("img7").alt= "no picture available for this cam";
        document.getElementById("img8").alt= "no picture available for this cam";
        document.getElementById("img9").alt= "no picture available for this cam";
        document.getElementById("img10").alt= "no picture available for this cam";
   
    }
}
if (camjs === "mahli"){
    if (rovrjs === "opportunity"){
        document.getElementById("img3").src= "";
        document.getElementById("img4").src= "";
        document.getElementById("img5").src= "";
        document.getElementById("img6").src= "";
        document.getElementById("img7").src= "";
        document.getElementById("img8").src= "";
        document.getElementById("img9").src= "";
        document.getElementById("img10").src= "";
        document.getElementById("img2").src= "";
        document.getElementById("img1").src= "";
        document.getElementById("img1").src= "No picture available for this cam";
        document.getElementById("img2").src= "No picture available for this cam";
        document.getElementById("img3").alt= "No picture available for this cam";
        document.getElementById("img4").alt= "no picture available for this cam";
        document.getElementById("img5").alt= "no picture available for this cam";
        document.getElementById("img6").alt= "no picture available for this cam";
        document.getElementById("img7").alt= "no picture available for this cam";
        document.getElementById("img8").alt= "no picture available for this cam";
        document.getElementById("img9").alt= "no picture available for this cam";
        document.getElementById("img10").alt= "no picture available for this cam";
   
    }
}

if (camjs === "mardi"){
    if (rovrjs === "opportunity"){
        document.getElementById("img3").src= "";
        document.getElementById("img4").src= "";
        document.getElementById("img5").src= "";
        document.getElementById("img6").src= "";
        document.getElementById("img7").src= "";
        document.getElementById("img8").src= "";
        document.getElementById("img9").src= "";
        document.getElementById("img10").src= "";
        document.getElementById("img2").src= "";
        document.getElementById("img1").src= "";
        document.getElementById("img1").src= "No picture available for this cam";
        document.getElementById("img2").src= "No picture available for this cam";
        document.getElementById("img3").alt= "No picture available for this cam";
        document.getElementById("img4").alt= "no picture available for this cam";
        document.getElementById("img5").alt= "no picture available for this cam";
        document.getElementById("img6").alt= "no picture available for this cam";
        document.getElementById("img7").alt= "no picture available for this cam";
        document.getElementById("img8").alt= "no picture available for this cam";
        document.getElementById("img9").alt= "no picture available for this cam";
        document.getElementById("img10").alt= "no picture available for this cam";
   
    }
}


}


    
