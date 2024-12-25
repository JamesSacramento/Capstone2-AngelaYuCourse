function animateCounter(id, start, end, duration, increment) {
    const element = document.getElementById(id);
    let current = start;

    function step() {
        current += increment;
        if (current >= end) {
            current = end;
        }
        element.textContent = current.toLocaleString();
        if (current < end) {
            setTimeout(step, duration / ((end - start) / increment));
        }
    }

    step();
}

document.addEventListener('DOMContentLoaded', () => {
    // Increment by 1,000,000 for millions, 1,000 for thousands, and normal for hundreds
    animateCounter('roi-counter', 0, 27275826.72, 1500, 1234321);
    animateCounter('ad-spend-counter', 0, 12600, 1500, 1231);
    animateCounter('clients-served-counter', 0, 10, 1500, 1);
});