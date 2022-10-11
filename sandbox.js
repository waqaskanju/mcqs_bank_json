function showFunction(abc) {
    var x = document.getElementById("description" + abc);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  const show_data = (mcqs, subject = "none", chapter = "none") => {
    let count = 1;
    for (mcq in mcqs) {
      if (
        mcqs[mcq][0].subject_name == subject &&
        mcqs[mcq][0].chapter_name == chapter
      ) {
        document.write(
          "<p class='question'>  Question " +
            count +
            ":" +
            mcqs[mcq][0].question +
            "</p> "
        );
        document.write(
          "<p> <input type='radio' name='optionsof" +
            mcqs[mcq][0].id +
            "'class='option_one'/> A: " +
            mcqs[mcq][0].option_one +
            "</p>"
        );
        document.write(
          "<p> <input type='radio' name='optionsof" +
            mcqs[mcq][0].id +
            "'class='option_two'/> B: " +
            mcqs[mcq][0].option_two +
            "</p>"
        );
        document.write(
          "<p> <input type='radio' name='optionsof" +
            mcqs[mcq][0].id +
            "'class='option_three'/> C: " +
            mcqs[mcq][0].option_three +
            "</p>"
        );
        document.write(
          "<p> <input type='radio' name='optionsof" +
            mcqs[mcq][0].id +
            "'class='option_four'/> D: " +
            mcqs[mcq][0].option_four +
            "</p>"
        );
        document.write(
          "<button id='" +
            mcqs[mcq][0].id +
            "' onclick='showFunction(this.id)'> Show Answer </button>"
        );
        document.write(
          "<div class='hidden' id='description" + mcqs[mcq][0].id + "'>"
        );
        document.write(
          "<p class='answer'> Answer:" + mcqs[mcq][0].answer + "</p>"
        );
        document.write(
          "<p class='description'> Description" +
            mcqs[mcq][0].explaination +
            "</p>"
        );
        document.write("</div>");
        count++;
      } else {
        console.log("false");
      }
    }
  };