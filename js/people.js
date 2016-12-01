angular.module('mainApp').factory('people', function people() {

  return [    
    {name: 'Adam Brody'},
    {name: 'Adam Lambert'},
    {name: 'Adam Levine'},
    {name: 'Adam Sandler'},
    {name: 'Adrien Brody'},
    {name: 'Albert Einstein'},
    {name: 'Alicia Silverstone'},
    {name: 'Alona Tal'},
    {name: 'Alison Brie'},
    {name: 'Alyson Hannigan'},
    {name: 'Amanda Bynes'},
    {name: 'Amanda Peet'},
    {name: 'Amy Schumer'},
    {name: 'Amy Winehouse'},
    {name: 'Andrew Garfield'},
    {name: 'Andy Kaufman'},
    {name: 'Andy Samberg'},
    {name: 'Anton Yelchin'},
    {name: 'Arthur Miller'},
    {name: 'Asaf Avidan'},
    {name: 'Ashley Tisdale'},
    {name: 'Ayelet Zurer'},
    {name: 'Bar Paly'},
    {name: 'Bar Refaeli'},
    {name: 'Barbra Streisand'},
    {name: 'Baruch Spinoza'},
    {name: 'Ben and Jerry', wiki: 'Ben_%26_Jerry%27s'},        
    {name: 'Ben Barnes', wiki: 'Ben_Barnes_(actor)'},
    {name: 'Ben Feldman', wiki: 'Ben_Feldman_(actor)'},
    {name: 'Ben Foster'},
    {name: 'Ben Stiller'},
    {name: 'Benjamin Disraeli'},
    {name: 'Bette Midler'},
    {name: 'Billy Crystal'},
    {name: 'Billy Joel'},
    {name: 'Bob Dylan'},
    {name: 'Bob Marley', score: 1},
    {name: 'Bob Saget'},
    {name: 'Brooke Burke'},
    {name: 'Bruno Mars', score: 1},
    {name: 'Bryan Greenberg'},
    {name: 'Carole King'},
    {name: 'Carrie Fisher', score: 2},        
    {name: 'Chelsea Handler', score: 2},
    {name: 'Chris Pine', score: 1},
    {name: 'Coen Brothers'},
    {name: 'Craig David'},
    {name: 'Daniel Day-Lewis'},
    {name: 'Daniel Radcliffe'},
    {name: 'Danny Kaye'},
    {name: 'Dave Franco'},
    {name: 'David Beckham', score: 2},
    {name: 'David Blaine', score: 2},
    {name: 'David Copperfield', wiki: 'David_Copperfield_(illusionist)'},
    {name: 'David Duchovny', score: 2},
    {name: 'David Lee Roth'},
    {name: 'David Schwimmer'},
    {name: 'Daryl Hannah', score: 2},
    {name: 'Debra Messing'},
    {name: 'Dianna Agron'},
    {name: 'Drake', wiki: 'Drake_(musician)'},
    {name: 'Dustin Hoffman'},
    {name: 'Eli Roth'},
    {name: 'Elizabeth Banks'},    
    {name: 'Elizabeth Berkley'},    
    {name: 'Elizabeth Taylor'},
    {name: 'Emile Berliner'},
    {name: 'Emmanuelle Chriqui'},
    {name: 'Emmy Rossum'},
    {name: 'Enrique Iglesias', score: 1},
    {name: 'Eric Dane'},
    {name: 'Eva Green'},
    {name: 'Evan Rachel Wood'},
    {name: 'Ezra Miller'},
    {name: 'Franz Kafka'},
    {name: 'Fred Savage'},
    {name: 'Gabriel Macht'},
    {name: 'Gal Gadot'},
    {name: 'Garry Kasparov', score: 2},
    {name: 'Garry Shandling'},
    {name: 'Gene Simmons'},
    {name: 'Gene Wilder'},
    {name: 'Gina Gershon'},
    {name: 'Goldie Hawn'},
    {name: 'Gustav Mahler', score: 2},
    {name: 'Gwyneth Paltrow'},
    {name: 'Hank Azaria'},
    {name: 'Hans Zimmer'},
    {name: 'Harrison Ford'},
    {name: 'Harry Houdini'},
    {name: 'Harvey Keitel'},
    {name: 'Heinrich Heine', score: 2},
    {name: 'Helen Hunt', score: 1},
    {name: 'Henry Winkler'},
    {name: 'H. J. Muller', wiki: 'Hermann_Joseph_Muller'},
    {name: 'Ian Ziering'},
    {name: 'Idina Menzel'},
    {name: 'Isaac Asimov'},        
    {name: 'Isla Fisher'},
    {name: 'J. D. Salinger'},
    {name: 'J. J. Abrams'},
    {name: 'JC Van Damme', wiki: 'Jean-Claude_Van_Damme', score: 1},
    {name: 'Jack Black'},
    {name: 'Jake Gyllenhaal'},                   
    {name: 'James Caan'},
    {name: 'James Franco'},
    {name: 'James Wolk'},
    {name: 'Jamie-Lynn Sigler'},
    {name: 'Jane Levy', score: 2},
    {name: 'Jason Alexander'},
    {name: 'Jason Schwartzman', score: 2},
    {name: 'Jason Segel'},
    {name: 'Jeff Goldblum'},
    {name: 'Jennifer Connelly'},
    {name: 'Jerry Bruckheimer'},
    {name: 'Jerry Lewis'},
    {name: 'Jerry Seinfeld'},
    {name: 'Jerry Stiller'},
    {name: 'Jesse Eisenberg'},
    {name: 'Jessica Alba', score: 1},
    {name: 'Jessica Biel', score: 1},
    {name: 'Jesus'},
    {name: 'Joaquin Phoenix'},
    {name: 'John von Neumann', score: 2},
    {name: 'Jon Favreau'},
    {name: 'Jon Stewart'},
    {name: 'Jonah Hill'},
    {name: 'Jonas Salk'},
    {name: 'Joseph Gordon-Levitt'},
    {name: 'Josh Bowman', score: 2},
    {name: 'Josh Charles'},
    {name: 'Josh Radnor'},
    {name: 'Julia Louis-Dreyfus', score: 1},
    {name: 'Julianna Margulies'},
    {name: 'Julianne Moore', score: 1},
    {name: 'Justin Bartha'},
    {name: 'Justin Kirk'},
    {name: 'Karl Marx'},
    {name: 'Kat Dennings'},
    {name: 'Kat Graham'},
    {name: 'Kate Hudson'},
    {name: 'Kirk Douglas'},
    {name: 'Kyra Sedgwick'},
    {name: 'Larry David'},    
    {name: 'Larry King'},
    {name: 'Larry Page'},
    {name: 'Lars Ulrich', score: 1},
    {name: 'Lauren Cohan'},
    {name: 'Lea Michele', score: 2},
    {name: 'Lenny Kravitz', score: 2},
    {name: 'Leon Trotsky'},           
    {name: 'Leonard Cohen'},
    {name: 'Leonard Nimoy'},
    {name: 'Levi Strauss'},
    {name: 'Lewis Black'},
    {name: 'Liev Schreiber'},
    {name: 'Lisa Bonet'},
    {name: 'Lisa Edelstein'},
    {name: 'Lisa Kudrow'},
    {name: 'Lizzy Caplan'},
    {name: 'Logan Lerman'},
    {name: 'Lou Reed'},
    {name: 'Louis C.K.', score: 1},
    {name: 'Maggie Gyllenhaal'},
    {name: 'Mandy Patinkin'},
    {name: 'Marc Chagall'},            
    {name: 'Marcel Marceau'},
    {name: 'Marcel Proust'},
    {name: 'Marilyn Monroe'},
    {name: 'Mark Ivanir'},
    {name: 'Mark Feuerstein'},
    {name: 'Mark Knopfler', score: 2},
    {name: 'Mark Zuckerberg'},
    {name: 'Mark-Paul Gosselaar', score: 1},
    {name: 'Marx Brothers'},
    {name: 'Matisyahu'},
    {name: 'Matthew Broderick'},
    {name: 'Max Greenfield'},
    {name: 'Mayim Bialik'},
    {name: 'Mel Brooks'},
    {name: 'Melanie Laurent', wiki: 'M%C3%A9lanie_Laurent'},
    {name: 'Michael Douglas', score: 2},
    {name: 'Michael Vartan'},
    {name: 'Michelle Trachtenberg'},
    {name: 'Mila Kunis'},
    {name: 'Mili Avital'},
    {name: 'Natalie Portman'},
    {name: 'Natasha Lyonne'},
    {name: 'Neve Campbell', score: 2},
    {name: 'Neil Diamond'},
    {name: 'Neil Sedaka'},
    {name: 'Niels Bohr'},
    {name: 'Nikki Reed'},
    {name: 'Noah Wyle', score: 2},
    {name: 'Nora Arnezeder'},
    {name: 'Odeya Rush'},
    {name: 'Olivia Wilde', score: 1},
    {name: 'Oscar Isaac', score: 1},
    {name: 'Patricia Arquette'},
    {name: 'Paul Auster'},
    {name: 'Paul Ehrlich'},
    {name: 'Paul Erdos', wiki: 'Paul_Erd%C5%91s'},
    {name: 'Paul Newman'},
    {name: 'Paul Rudd'},
    {name: 'Paula Abdul'},
    {name: 'Peter Falk'},
    {name: 'Peter Sellers'},
    {name: 'Pink', wiki: 'Pink_(singer)'},
    {name: 'Rachel Bilson', score: 2},
    {name: 'Rachel Weisz'},
    {name: 'Rashida Jones'},
    {name: 'Ray Kurzweil'},
    {name: 'Rena Sofer'},
    {name: 'Richard Dreyfuss'},
    {name: 'Richard Feynman'},
    {name: 'River Phoenix'},
    {name: 'Robert Downey Jr.',score: 2},
    {name: 'Rosie Huntington-Whiteley', score: 2},
    {name: 'Rube Goldberg'},
    {name: 'Sacha Baron Cohen'},
    {name: 'Sammy Davis Jr.'},
    {name: 'Sara Paxton'},
    {name: 'Sarah Jessica Parker'},    
    {name: 'Sarah Michelle Gellar'},    
    {name: 'Sarah Silverman'},           
    {name: 'Scarlett Johansson'},
    {name: 'Scott Caan', score: 2},
    {name: 'Scott Mechlowicz'},
    {name: 'Sean Penn', score: 2},
    {name: 'Selma Blair'},
    {name: 'Sergey Brin'},
    {name: 'Seth Green'},
    {name: 'Seth Rogen'},
    {name: 'Shia LaBeouf'},
    {name: 'Shiri Appleby'},
    {name: 'Sigmund Freud'},
    {name: 'Simon and Garfunkel', wiki: 'Simon_%26_Garfunkel'},
    {name: 'Stanley Kubrick'},
    {name: 'Steve Guttenberg'},
    {name: 'Steven Spielberg'},
    {name: 'Steven Weber', wiki: 'Steven_Weber_(actor)'},
    {name: 'Sylvester Stallone', score: 1},
    {name: 'Tony Curtis'},
    {name: 'Vladimir Lenin', score: 1},  
    {name: 'William Shatner'},
    {name: 'Winona Ryder'},            
    {name: 'Woody Allen'},
    {name: 'Zach Braff'},
    {name: 'Zac Efron'},
    {name: 'Zoe Kravitz', wiki: 'Zo%C3%AB_Kravitz'}
  ]

});
