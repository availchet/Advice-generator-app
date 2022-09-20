"use strict";


function update() {
    $.ajax({
        url: "http://localhost:8000/data",
        success: function(result) {
            const phraseTitleDiv = document.getElementById("phrase-title");
            const phraseDiv = document.getElementById("phrase");
            const phraseAuthorDiv = document.getElementById("phrase-author");

            phraseTitleDiv.innerHTML = `Advice #${result.id}`;
            phraseDiv.innerHTML = `"${result.quote}"`;
            phraseAuthorDiv.innerHTML = result.author;
        }
    });
}

update();
