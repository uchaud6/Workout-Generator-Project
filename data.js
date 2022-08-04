// workout object literals/dictionaries that help to calibrate routine needs

const exercise = {
    // exercise dataset based off equipment, randomly select exercises for given muscle groups
    "Dumbbells Only": {
        "Upper Body Anterior Chain (Chest, shoulders, etc.)": ["Dumbbell Bench Press", "Dumbbell Shoulder Press", "Dumbbell Lying Down Extensions",
                "Incline Dumbbell Bench Press", "Hex-Press", "Arnold Press", "Dumbbell Tricep Kickbacks",
                "Dumbbell Front Raise", "Dumbbell Bench Flys", "Dumbbell Incline SkullCrushers",
                "Dumbbell Seated Overhead Tricep Press", "Dumbbell Supinated Incline Press"],

        "Upper Body Posterior Chain (Back Muscles/Biceps)": ["Dumbbell Bent Over Single Row", "Dumbbell Curls", "Dumbbell Bent Over Reverse Fly", "Dumbbell Hammer Curls", 
                "Chest Supported Bench row", "Dumbell Single Arm Preacher Curls", "Dumbbell Pullovers", "Dumbell Curl into Dumbbell Hammer Curl",
                "Dumbbell Shrugs", "Dumbbell Dead-Floor Row", "Slow Isometric Dumbbell Curls", "Dumbbell Renegade Row"],

        "Leg Muscles": ["Goblet Squat", "Dumbbell Calve Raises", "Dumbbell Squats", "Dumbbell Split Squats", "Dumbbell Lunges",
                "Dumbbell Hip Thrust", "Dumbbell Deadlifts", "Dumbbell Stiff-Leg Deadlift", "Dumbbell Romanian Deadlift",
                "Dumbbell Goblet Squat Jumps", "Dumbbell Wall Sit as 15 Secs for a Rep", "Dumbbell Slow Isometric Goblet Squat"],

        "Abs and Cardio": ["Dumbbell Farmer Walks", "Dumbbell Oblique Twists", "Dumbbell Crunches", "Back Dumbbell Plank for 15 Secs as a Rep", 
                "One-Arm Bench Press", "One-Arm Shoulder Press", "Dumbbell Burpee", "Dumbbell Static Crunch Holds for 15 Secs as a Rep", 
                "One-Arm Light Bench Press", "One-Arm Farmer Walks", "Dumbbell Crunch Static Holds for 15 Secs as a Rep",
                "Light Weight Starfish Crunches"],

    },

    "No Equipment": {
        "Upper Body Anterior Chain (Chest, shoulders, etc.)": ["Slow Isometric Pushups", "Push Side-to-Side Pushups", "Lying On the Ground Tricep Extension",
                "Elevated Surface Shoulder Pushups", "Bodyweight Dips", "Diamond Pushups", "Incline Pushups", "Push-Off the Ground Pushups", "Decline Pushups",
                "Diamond into Regular Pushups", "Static Hold Pushups for 15 Secs as a Rep", "Tricep Extension By Leaning on a Graspable Surface"],

        "Upper Body Posterior Chain (Back Muscles/Biceps)": ["Pull-Ups","Chin-Ups", "Curling a Filled Backpack", "Superman Raise", "Hammer Curling a Filled Backpack",
                "Bent-Over Row with a Filled Backpack or Container", "Wall-Supported Leg Curl", "Resistance Band-Supported Row", "Resistance Band Pull Aparts", 
                "Resistance Band Supported Pull-Ups", "Resistance Band Pulldowns"],

        "Leg Muscles": ["Jump Squats", "Alternating Jumping Split Squats", "BodyWeight Lunges", "Calve Focused Jump Rope", "Wall-Sit as 15 Secs for a Rep",
                "Box-Jump Squats", "Reverse Lunges", "Pistol Squats", "One Leg Wall-Sit as 15 Secs for a Rep", "Kneeling to Jumping Squat",
                "Wall-Supported Calve Raise", "Static Squat Hold to Jump Squat"],

        "Abs and Cardio" : ["Oblique Side Plank for 15 Secs as a Rep", "V-Sit for 15 Secs as a Rep", "Leg-Raises", "Cherry-Pickers/Oblique Twists",
                "Crunches", "Starfish Crunches", "Twisting Mountain Climbers", "Bicycle Crunches", "Oblique Crunches", "Scissor Kicks","Reverse Crunches",
                "Lying-Down L Toe Touches"],
                
    },

    "Full Gym Equipment": {
        "Upper Body Anterior Chain (Chest, shoulders, etc.)": ["Close-Grip Barbell Bench Press", "Resistance Cable Bench Press", "Cable Chest Flys",
                "Shoulder Machine Press", "Side-Delt Raises", "Incline Machine Press", "Dips on Dip Stand", "EZ Bar Skullcrushers",
                "Barbell Bench Press", "Tricep Cable Pushdowns", "Overhead Cable Rope Extension", "Barbell Shoulder Press"],

        "Upper Body Posterior Chain (Back Muscles/Biceps)": ["Seated Resistance Cable Single-Armed Row", "Lat Pulldown Machine", "Pull-Ups",
                "EZ Bar Curl", "Barbell Bent Over Row", "T-Bar Row", "Seated Incline Curl", "Chest Supported Row Machine", "Resistance Cable Curl",
                "Rear Delt Pec Deck Flies", "Preacher Curl Machine", "Chin-Ups"],

        "Leg Muscles": ["Barbell Squats", "Hack Squat Machine", "Calve Raise Machine", "Barbell Deadlift", "Leg Press Machine",
                "Barbell Stiff-Leg Deadlift", "Barbell Front Squat", "Dumbbell Split Squats", "Leg Quad Extension Machine",
                "Hamstring Curl Machine", "Pushing Off Bench Squat", "Barbell Smith Machine Squat"],

        "Abs and Cardio" : ["Treadmill Running for 1 Minute for a Rep", "Indoor Cycle Training for 1 Minute for a Rep", "Leg Raises With Back Support Stand", 
                "Hanging Static L Raise", "Medicine Ball Cherry Pickers", "Ab Crunch Machine", "Oblique Twisting Machine", "StairMaster for 1 Minute for a Rep",
                "Medicine Ball Wall Throws", "Hanging Circling Leg Raises", "Hanging Oblique Crunches"],

    },
};

const intsylvl = {
    // key associated number values refer to # of reps shy from muscular failure per set
    "Light Day": 5,
    "A Solid Workout" : 2,
    "Giving it everything you got!": 1,
}

const time = {
            // '[0]' indice in key associated array is number of exercises in the workout
            // '[1]' indice in key associated array is number of sets per exercise in the workout
            // '[2]' indice in associated array is the number of mins rest between sets
    "10": [1, 5, 1],
    "30": [2, 4, 2],
    "45": [3, 4, 2.5],
    "60": [4, 4, 3],
}

module.exports = {exercise, intsylvl, time}

