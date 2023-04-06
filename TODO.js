document.addEventListener('DOMContentLoaded', () => {
    const enterTodoListButton = document.getElementById('enter-todo-list');
    const appContainer = document.getElementById('app-container');
    const form = document.getElementById('add-goal-form');
    const goalsContainer = document.getElementById('goals-container');
    const financeGoals = document.getElementById('finance-goals');
    const personalGoals = document.getElementById('personal-goals');
    const fitnessGoals = document.getElementById('fitness-goals');

    appContainer.style.display = 'none';

    function createGoal(category, description) {
        const goalItem = document.createElement('li');
        goalItem.textContent = description;

        goalItem.addEventListener('click', () => {
            goalItem.classList.toggle('completed');
            checkAllGoalsCompleted();
        });

        goalItem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            goalItem.remove();
        });

        switch (category) {
            case 'finance':
                financeGoals.appendChild(goalItem);
                break;
            case 'personal':
                personalGoals.appendChild(goalItem);
                break;
            case 'fitness':
                fitnessGoals.appendChild(goalItem);
                break;
        }
    }

    function checkAllGoalsCompleted() {
        const allGoals = document.querySelectorAll('#goals-container li');
        const completedGoals = document.querySelectorAll('#goals-container li.completed');
        if (allGoals.length === completedGoals.length && allGoals.length > 0) {
            displayCongratulations();
        }
    }

function displayCongratulations() {
    goalsContainer.innerHTML = '<h2>Congratulations! You have completed all your goals!</h2><button id="restart-btn">Restart</button>';

    financeGoals.innerHTML = '';
    personalGoals.innerHTML = '';
    fitnessGoals.innerHTML = '';

    form.style.display = 'none';

    const restartBtn = document.getElementById('restart-btn');
    restartBtn.addEventListener('click', () => {
        location.reload();
    });
}
    

    function restart() {
        financeGoals.innerHTML = '';
        personalGoals.innerHTML = '';
        fitnessGoals.innerHTML = '';
        alert('Please add some goals to your daily list.');
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const category = form.elements.category.value;
        const description = form.elements.description.value.trim();

        if (description.length > 0) {
            createGoal(category, description);
            form.elements.description.value = '';
        }
    });

    enterTodoListButton.addEventListener('click', () => {
        enterTodoListButton.style.display = 'none';
        appContainer.style.display = 'block';
    });
});
