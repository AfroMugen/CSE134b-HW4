/*eslint-env browser*/
var app = new function () {
    // Arrays that store the input values
    this.movies = ["Star Wars", "The Empire Strikes Back", "The Revenge of the Jedi"];
    this.years = ["1997", "1980", "1983"];
    this.ratings = ["PG", "PG", "PG"];
    
    // Stores current index when editing and deleting movies
    var indexRetreive = '';
    var indexRemove = '';
    
    // Main function that displays the movies in an unordered list
    this.fetchAll = function () {
        var data = '';
        
        if (this.movies.length > 0) {
            var i;
            for (i=0; i < this.movies.length; i++) {
                data += '<li>';
                data += this.movies[i] + ' (' + this.years[i] + ') - Rated: ' + this.ratings[i];
                data += '<b id="edit" onclick="app.Retreive(' + i + ')"> Edit</b>';
                data += '<b id="delete" onclick="app.Remove(' + i + ')"> Delete</b>';
                data += '</li>';
            }
        }
        else {
            data = "No movies are currently listed";
        }
        
        return document.getElementById('movieList').innerHTML = data;
    };
    
    // Function that shows add movie dialog box
    this.Add = function() {
        document.getElementById('title').value = "";
        document.getElementById('year').value = "";
        document.getElementById('userInput').showModal();
    };
    
    // Insert new movie into arrays
    this.Insert = function() {
        var title = document.getElementById('title').value;
        var year = document.getElementById('year').value;
        var rating = document.getElementById('rating').options[document.getElementById('rating').selectedIndex].value;
        if (title || year) {
            this.movies.push(title.trim());
            this.years.push(year.trim());
            this.ratings.push(rating.trim());
            this.fetchAll();
        }
        document.getElementById('userInput').close();
    };

    // Cancel movie input
    this.cancelAdd = function() {
        document.getElementById('userInput').close();    
    };
    
    // Opens edit dialog box
    this.Retreive = function(item) {
        indexRetreive = item;
        document.getElementById('titleEdit').value = this.movies[item];
        document.getElementById('yearEdit').value = this.years[item];
        document.getElementById('ratingEdit').value = this.ratings[item];
        document.getElementById('userInput2').showModal();
    };
    
    // Edit selected movie that is already in array
    this.Edit = function() {
        var title = document.getElementById('titleEdit').value;
        var year = document.getElementById('yearEdit').value;
        var rating = document.getElementById('ratingEdit').options[document.getElementById('ratingEdit').selectedIndex].value;
        var self = this;      
        if (title || year) {
            self.movies.splice(indexRetreive, 1, title.trim());
            self.years.splice(indexRetreive, 1, year.trim());
            self.ratings.splice(indexRetreive, 1, rating.trim());
            self.fetchAll();
        }
        document.getElementById('userInput2').close();
    };
    
    // Cancel movie edit
    this.cancelEdit = function() {
        document.getElementById('userInput2').close();    
    };
 
    // Opens delete dialog box
    this.Remove = function(item) {
        indexRemove = item;
        document.getElementById('deleteMovie').showModal();
    }; 
    
    // Delete movie from arrays
    this.Delete = function() {
        this.movies.splice(indexRemove, 1);
        this.years.splice(indexRemove, 1);
        this.ratings.splice(indexRemove, 1);
        this.fetchAll();
        document.getElementById('deleteMovie').close();        
    };
   
    // Cancel delete
    this.cancelDelete = function() {
        document.getElementById('deleteMovie').close();    
    };    
}

app.fetchAll();