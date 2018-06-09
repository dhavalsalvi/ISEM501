var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    app = express();

var connect = "postgres://isem501project2:project2@project2.cjy4d6bbje2j.us-east-1.rds.amazonaws.com/project2";

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req, res){

   pg.connect(connect, function(err,client,done){
	if(err){
		return console.error('error fetching client from pool', err);
	} 
	client.query('Select * from "Candidates"', function(err,result){
		
		if(err){
			return console.error('error running query', err);
		}

		
		res.render('index', {recipes: result.rows});
		done();
		//console.log(result.rows[0].number);
	});
  });

});

app.get('/candidates',function(req, res){

   pg.connect(connect, function(err,client,done){
	if(err){
		return console.error('error fetching client from pool', err);
	} 
	client.query('Select * from "Candidates" where "Status" = \'Phone Interview\'', function(err,result){
		
		if(err){
			return console.error('error running query', err);
		}

		
		res.render('candidates', {recipes: result.rows});
		done();
		//console.log(result.rows[0].number);
	});
  });

});

app.get('/reports',function(req, res){

   pg.connect(connect, function(err,client,done){
	if(err){
		return console.error('error fetching client from pool', err);
	} 
	client.query('Select * from "Candidates" where "Status" = \'Phone Interview\'', function(err,result){
		
		if(err){
			return console.error('error running query', err);
		}

		
		res.render('reports', {recipes: result.rows});
		done();
		//console.log(result.rows[0].number);
	});
  });

});

app.get('/open_recquisitions',function(req, res){

   pg.connect(connect, function(err,client,done){
	if(err){
		return console.error('error fetching client from pool', err);
	} 
	client.query('Select * from "Positions"', function(err,result){
		
		if(err){
			return console.error('error running query', err);
		}

		//console.log(result.rows);
		res.render('open_recquisitions', {recipes: result.rows});
		done();
		//console.log(result.rows[0].number);
	});
  });

});

app.get('/events',function(req, res){

   pg.connect(connect, function(err,client,done){
	if(err){
		return console.error('error fetching client from pool', err);
	} 
	client.query('Select * from "Candidates" where "Status" = \'Phone Interview\'', function(err,result){
		
		if(err){
			return console.error('error running query', err);
		}

		
		res.render('events', {recipes: result.rows});
		done();
		//console.log(result.rows[0].number);
	});
  });

});

app.get('/companies',function(req, res){

   pg.connect(connect, function(err,client,done){
	if(err){
		return console.error('error fetching client from pool', err);
	} 
	client.query('Select * from "Candidates"', function(err,result){
		
		if(err){
			return console.error('error running query', err);
		}

		
		res.render('companies', {recipes: result.rows});
		done();
		//console.log(result.rows[0].number);
	});
  });

});

app.post('/add', function(req,res){

   pg.connect(connect, function(err,client,done){
	if(err){
		return console.error('error fetching client from pool', err);
	} 
	client.query("INSERT INTO \"Candidates\"(\"FirstName\",\"LastName\",\"Address1\",\"Email\") VALUES($1,$2,$3,$4)",[req.body.FirstName,req.body.LastName,req.body.Address1,req.body.Email]);
	done();
	res.redirect('/');
  });


})



app.listen(3000, function(){
	console.log('server started on port 3000');
});

