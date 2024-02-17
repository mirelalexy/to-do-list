import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'To-Do List',
      theme: ThemeData(
        useMaterial3: true,
        primaryColor: Colors.deepPurpleAccent,
        scaffoldBackgroundColor: const Color.fromARGB(255, 169, 149, 198),
      ),
      home:Homepage()
    );
  }
}

class Homepage extends StatefulWidget {
  @override
  State<Homepage> createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  List<String> _todos = [];
  String newToDo = "";

@override
void initState() {
  super.initState();
  _loadTasks();
}

void _loadTasks() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  setState(() {
    _todos = prefs.getStringList('todos') ?? [];
  });
}

void _saveTasks() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  prefs.setStringList('todos', _todos);
}

void _addToDo() async{
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("add a new to-do"),
          content: TextField(
            onChanged: (value) {
              newToDo = value;
            },
          ),
          actions: [
            ElevatedButton(
              onPressed: () {
                  setState(() {
                    if (newToDo.isNotEmpty) {
                      _todos.add(newToDo);
                      _saveTasks();
                    }
                    Navigator.pop(context);
                  });
              }, child: Text("add"),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            'to-do list',
            style: TextStyle(
              fontFamily: 'Coolvetica',
              fontSize: 50,
              color: Colors.deepPurple,
            )
          ),
          SizedBox(
            height: 400,
            child: ListView.builder(
              scrollDirection: Axis.vertical,
              shrinkWrap: true,
              itemCount: _todos.length,
              itemBuilder: (context, index) {
                return Card(
                  elevation: 4,
                  margin: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
                  child: ListTile(
                    title: Text(
                      _todos[index],
                      style: TextStyle(
                        fontFamily: 'Coolvetica',
                        fontSize: 18,
                        color: Colors.black,
                      )
                    ),
                    trailing: IconButton(
                      icon: Icon(Icons.delete),
                      onPressed: () {
                        setState(() {
                          _todos.removeAt(index);
                          _saveTasks();
                        });
                      },
                    ),
            )
                );
              }
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _addToDo,
        backgroundColor: Colors.deepPurple,
        child: Icon(Icons.add)
      ),
    );    
  }
}