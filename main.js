// selecting HTML elements from the form
const btn = document.querySelector("button");
const intsy = document.querySelector("#intensity");
const mins = document.querySelector("#mins");
const equip = document.querySelector("#equipment");
const mucls = document.querySelector("#muscle")

// error message HTML element selector
const msg = document.querySelector(".message")

// generating exercises with HTML element selectors
const exercises_h1 = document.querySelector(".workout-header")
const exercises_ul = document.querySelector(".exercises")



// generate exercise routine button has been clicked
btn.addEventListener("click", clicked);


function clicked() {
    // check to see if all fields have been selected and not left blank
    if (intsy.options[intsy.selectedIndex].text === "" || mins.options[mins.selectedIndex].text === "" ||
        equip.options[equip.selectedIndex].text === "" || mucls.options[mucls.selectedIndex].text === "") {

        // delete any possible displayed exercise routine to emphasize error message
        exercises_h1.innerHTML = ""
        exercises_ul.innerHTML = ""
        // show error message if all fields have not been changed
        msg.innerHTML = "<p>Configure All Fields From Default Blank Space Before Generating Routines.</p>";
    }
    else {
        // take away possible previous error message since all fields have been selected
        msg.innerHTML = "";

        // take away possible previous generated routine
        exercises_ul.innerHTML = ""

        // take in selected HTML form values below

        // intensity will refer to how many reps shy from failure per set
        const intsyInput = intsy.options[intsy.selectedIndex].text;
        // time (in minutes) will decide how many exercises, sets, and break time per set
        const minsInput = mins.options[mins.selectedIndex].text;
        // equipment will decide what kinds of exercises based off equipment
        const equipInput = equip.options[equip.selectedIndex].text;
        // targeted muscles will narrow down exercise choices to target chosen muscle groups
        const muclsInput = mucls.options[mucls.selectedIndex].text;

        // # of exercises, sets, rest based off javascript object literal below
        const num_of_exercises = time[minsInput][0]
        const num_of_sets = time[minsInput][1]
        const rest = time[minsInput][2]

        // # of reps shy from failuer based off javascript object literal below
        const reps = intsylvl[intsyInput]

        // array used to check to see if randomly selected index is new
        // so no repeated exercises are generated
        const new_indices = []

        // display what kind of muscle groups the routine is based off of
        exercises_h1.innerHTML = `${muclsInput} Targeted Workout Routine:`

        // while loop used to generate as many exercises as needed
        while (new_indices.length != num_of_exercises) {
            // create random indice to plug into 'exercise' object literal
            let num = Math.random()
            num *= 12 // there are 12 kinds of exercises in every category currently
            let indice = Math.floor(num)

            // check to see if the indice is new so that no exercise is repeatedly 
            // displayed on screen
            if (new_indices.includes(indice) == false) {
                // add the indice to array variable for next loop iteration
                new_indices.push(indice)

                // function to display dom elements and use workout dataset

                const getData = () => {
                    fetch("workout.json")
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            new_exercise = document.createElement("li")
                            new_exercise.textContent = `${data[equipInput][muclsInput][indice]} for ${num_of_sets} sets 
                            and ${reps} reps shy from failure with ${rest} minutes of rest between sets`;
                            exercises_ul.appendChild(new_exercise);
                        })
                }

                // display exercise on page
                getData();


            }
        }

    }
    // set form elements back to default
    intsy.selectedIndex = "none";
    mins.selectedIndex = "none";
    equip.selectedIndex = "none";
    mucls.selectedIndex = "none";

}

var intsylvl = {
    // key associated number values refer to # of reps shy from muscular failure per set
    "Light Day": 5,
    "A Solid Workout": 2,
    "Giving it everything you got!": 1,
}

var time = {
    // '[0]' indice in key associated array is number of exercises in the workout
    // '[1]' indice in key associated array is number of sets per exercise in the workout
    // '[2]' indice in associated array is the number of mins rest between sets
    "10": [1, 5, 1],
    "30": [2, 4, 2],
    "45": [3, 4, 2.5],
    "60": [4, 4, 3],
}
