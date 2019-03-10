document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', function() {  
        var resultSection = document.getElementById('results');
        var roiResult = document.getElementById('roiResult');
        var sttgResult = document.getElementById('sttgResult');
        var gradeLevel = document.getElementById('gradeLevelSelect').value;
        var studentBaseline = +document.getElementById('studentBaseline').value;
        var instructionalWeeksLeft = +document.getElementById('instructionalWeeksLeft').value;
        var weeksUntilReview = +document.getElementById('weeksUntilReview').value;

        var benchmark = 0;

        switch (gradeLevel) {
            case "first":
                benchmark = 47;
                break;
            case "second":
                benchmark = 87;
                break;
            case "third":
                benchmark = 100;
                break;
            case "fourth":
                benchmark = 115;
                break;
            case "fifth":
                benchmark = 130;
                break;
        }

        var stepOne = benchmark - studentBaseline;
        var roi = stepOne / instructionalWeeksLeft;

        var stepTwo = roi * weeksUntilReview;
        var sttg = stepTwo + studentBaseline;

        roiResult.innerText = roi;
        sttgResult.innerText = sttg;
        resultSection.style ="display: block;";
    }, false);
  }, false);