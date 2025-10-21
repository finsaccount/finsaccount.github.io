document.addEventListener('DOMContentLoaded', () => {

    // Select all filter buttons and portfolio items
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const currentlyFilteringText = document.getElementById('currentlyFiltering');

    // Function to filter portfolio items
    const filterItems = (category, buttonText) => {
        portfolioItems.forEach(item => {
            // If 'all' is selected or item's category matches the filter, display it
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                // Add a fade-in animation
                item.classList.add('fade-in');
            } else {
                item.style.display = 'none';
                item.classList.remove('fade-in');
            }
            
        });
        // Update the currently filtering text
        currentlyFilteringText.innerText = 'Currently Filtering: ' + buttonText;
    };

    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');
            // Get the filter category from data attribute
            const filterValue = button.getAttribute('data-filter');
            // Call the filter function with both category and button text
            filterItems(filterValue, button.innerText);
        });
    });

    // Initial call to display all items
    filterItems('all');

    // Sidebar toggle functionality
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sideBarForFiltering');
    const portfolio = document.getElementById('portfolio');
    
    // Function to update portfolio margin based on sidebar state
    const updatePortfolioMargin = () => {
        if (!sidebar.classList.contains('closed')) {
            portfolio.classList.add('sidebar-open');
        } else {
            portfolio.classList.remove('sidebar-open');
        }
    };

    // Initial portfolio margin setup
    updatePortfolioMargin();
    
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('closed');
        toggleButton.classList.toggle('closed');
        updatePortfolioMargin();
    });
});

