array = JSON.parse(array);
array.forEach(renderTask)


document.querySelectorAll(".btn").forEach(button => button.addEventListener("click", incrementer))

function incrementer(event) {
    const button = event.target;
    let counter = parseInt(button.textContent);
    counter++;
    if (counter > 1 && counter <= 2) {
        button.className = "btn btn-warning"
    } else if (counter > 3 && counter <= 4) {
        button.className = "btn btn-danger"
    } else if (counter === 5) {
        button.disabled = true;
    }
    button.textContent = counter;
}

function renderTask(task) {
    document.getElementById("result").innerHTML += `
    <div class="card cardDetails m-4" style="width: 18rem;">
        <img src="${task.img}" class="card-img-top" alt="${task.task}">
        <div class="card-body">
            <h5 class="card-title">${task.task} </h5>
            <p class="card-text">${task.description} <br> <br>
            &#9888; Priority level:
                <button class="btn btn-success">
                ${task.Priority_level}
                </button>
                <br>
                <br>
                <i class="fa fa-calendar"></i> Deadline: ${task.Deadline}</p>
                <hr>
                <div class="ddbtn">
                <button class="decline" onclick="decline()"><i class="fa fa-trash-o"></i> Decline</button>   <button class="done" onclick="decline()">	
                &#10003; Done</button>
                </div>
        </div>
    </div>
        `
}

// crtl Leertaste beendet den Code