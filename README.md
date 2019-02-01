# My Movie DB
 you will be creating your own Movie Database of movies you have watched and movies you would like to watch from OMDb API ( http://www.omdbapi.com/)
 - The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users. 
 
# code 
- ./public/index.html : run this app 
- ./src/App.js : main source code of this App
- ./src/Movie.js  : The movies after searching 
- ./src/SelectedMovie.js : The movies list that you would like to watch or watched 

# Requirement 
- You must use react router to create at least 2 pages - 1 main page, / and a search page.
- Your main page should link to your search page and your search page should like back to your main page.
- On your main page, you should display 2 separate lists of movies - those you want to watch and those you have already watched.
- Each of the 2 lists should have a list title, like "Want to Watch", and the title and list should only be shown if there are movies in that list.
- The movies displayed in the lists should show the poster and the title of the movie.
- To add movies to the list, you must go search for them on the search page
- Using a controlled input component, you should be able to search use the value in the input to search the OMDB API that we used in an earlier exercise.
- If there are no results to display, indicate that not results could be found, otherwise show the first results.
- The movie results should include the poster and the title of the movie.
- You should have 2 buttons that allow you to add the movie to one of the 2 lists shown on the previous page, your 'Watched' movies and the movies you 'Want to Watch'. If the movie already belongs in one of these 2 lists, don't show the buttons.
- Your app must have at least 3 components - 1 being the the main component, call it app or whatever else, in addition you should have a separate component to manage your search page and one to list each individual movie in your 'to-watch' 'already-watched' lists.

