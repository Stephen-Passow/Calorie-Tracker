(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(66)},42:function(e,t,a){},43:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(31),i=a.n(r),l=(a(42),a(6)),s=a(7),c=a(9),u=a(8),h=a(10),m=a(11),y=a(12),p=(a(43),a(35)),d=a(17),g=a.n(d),v=a(32),b=[{activity:"Soccer",caloriesPerHour:640,type:"sport"},{activity:"Basketball",caloriesPerHour:700,type:"sport"},{activity:"Ping Pong",caloriesPerHour:327,type:"sport"},{activity:"Mountain Biking",caloriesPerHour:695,type:"cycling"},{activity:"Street Biking",caloriesPerHour:464,type:"cycling"},{activity:"Trail Riding",caloriesPerHour:695,type:"cycling"},{activity:"Hiking",caloriesPerHour:572,type:"onFoot"},{activity:"Running",caloriesPerHour:626,type:"onFoot"},{activity:"Walking",caloriesPerHour:472,type:"onFoot"},{activity:"Tennis",caloriesPerHour:505,type:"sport"},{activity:"Yoga",caloriesPerHour:280,type:"onFoot"},{activity:"Golf",caloriesPerHour:394,type:"sport"},{activity:"Badminton",caloriesPerHour:454,type:"sport"},{activity:"House Chores",caloriesPerHour:287,type:"onFoot"}],f=a(15),w=a.n(f),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={workouts:b,caloriesBurnt:""},a.val=function(){var e=document.getElementById("lengthOfWorkout").value,t=document.getElementById("workouts").value*e;a.setState({caloriesBurnt:t})},a.sendapi=Object(v.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={caloriesBurnt:a.state.caloriesBurnt},e.next=3,w.a.post("/activityType",t);case 3:""===a.state.caloriesBurnt?alert("Please fill out all fields"):alert("Sent to your database!");case 4:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Object(p.a)(new Set(this.state.workouts.map(function(e){return e.type})));return n.a.createElement("div",null,n.a.createElement("select",{className:"dropdown"},n.a.createElement("option",null,"---Select a type of workout"),e.map(function(e){return n.a.createElement("option",null,e)})),n.a.createElement("br",null),n.a.createElement("label",{className:"labels",htmlFor:"workouts"}," "),n.a.createElement("br",null),n.a.createElement("h2",null,"Now choose a workout:"),n.a.createElement("select",{id:"workouts",className:"dropdown",onChange:this.handleChange},n.a.createElement("option",null,"---Please Select an Option---"),this.state.workouts.map(function(e){return n.a.createElement("option",{value:e.caloriesPerHour},e.activity)})),n.a.createElement("br",null),n.a.createElement("label",{className:"labels",htmlFor:"lengthOfWorkout"}),n.a.createElement("br",null),n.a.createElement("h2",null,"How long did you workout?"),n.a.createElement("select",{id:"lengthOfWorkout",className:"dropdown",onChange:this.val},n.a.createElement("option",{value:""},"--Please choose one--"),n.a.createElement("option",{value:".5"},"30 Miniutes"),n.a.createElement("option",{value:"1"},"1 Hour"),n.a.createElement("option",{onChange:this.handleChange,value:"1.5"},"1 Hour 30 Miniutes"),n.a.createElement("option",{onChange:this.handleChange,value:"2"},"2 Hour"),n.a.createElement("option",{onChange:this.handleChange,value:"2.5"},"2 Hour 30 Miniutes"),n.a.createElement("option",{onChange:this.handleChange,value:"3"},"3 Hour"),n.a.createElement("option",{onChange:this.handleChange,value:"3.5"},"3 Hour 30 Miniutes"),n.a.createElement("option",{onChange:this.handleChange,value:"4"},"4 Hour")),n.a.createElement("br",null),n.a.createElement("h3",null,"Calories Burned: ",this.state.caloriesBurnt),n.a.createElement("br",null),n.a.createElement("button",{onClick:this.sendapi,className:"btn"},"Submit to your tracker"))}}]),t}(o.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Calorie Counter App!"),n.a.createElement("br",null),n.a.createElement("h2",null,"Choose the type of activity you want"),n.a.createElement(E,null),n.a.createElement("br",null),n.a.createElement(m.b,{className:"links",to:"/SubmitNewWorkout"},"Suggest a new Workout"),n.a.createElement("br",null),n.a.createElement(m.b,{className:"links",to:"/Description"},"Click here to see the benefits of excersizing!"))}}]),t}(o.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"description"},n.a.createElement("h1",null,"Benefits of excersizing"),n.a.createElement("h2",null,"1. Exercise controls weight"),n.a.createElement("p",null,"Exercise can help prevent excess weight gain or help maintain weight loss. When you engage in physical activity, you burn calories. The more intense the activity, the more calories you burn."),n.a.createElement("p",null,"Regular trips to the gym are great, but don't worry if you can't find a large chunk of time to exercise every day. Any amount of activity is better than none at all. To reap the benefits of exercise, just get more active throughout your day \u2014 take the stairs instead of the elevator or rev up your household chores. Consistency is key."),n.a.createElement("h2",null,"2. Exercise combats health conditions and diseases"),'Worried about heart disease? Hoping to prevent high blood pressure? No matter what your current weight is, being active boosts high-density lipoprotein (HDL) cholesterol, the "good" cholesterol, and it decreases unhealthy triglycerides. This one-two punch keeps your blood flowing smoothly, which decreases your risk of cardiovascular diseases. Regular exercise helps prevent or manage many health problems and concerns, including: Stroke Metabolic syndrome High blood pressure Type 2 diabetes Depression Anxiety Many types of cancer Arthritis Falls It can also help improve cognitive function and helps lower the risk of death from all causes.',n.a.createElement("h2",null,"3. Exercise improves mood"),"Need an emotional lift? Or need to blow off some steam after a stressful day? A gym session or brisk walk can help. Physical activity stimulates various brain chemicals that may leave you feeling happier, more relaxed and less anxious. You may also feel better about your appearance and yourself when you exercise regularly, which can boost your confidence and improve your self-esteem.",n.a.createElement("h2",null,"4. Exercise boosts energy"),"Winded by grocery shopping or household chores? Regular physical activity can improve your muscle strength and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.",n.a.createElement("h2",null,"5. Exercise promotes better sleep"),"Struggling to snooze? Regular physical activity can help you fall asleep faster, get better sleep and deepen your sleep. Just don't exercise too close to bedtime, or you may be too energized to go to sleep.",n.a.createElement("h2",null,"6. Exercise brings back your mojo"),"Do you feel too tired or too out of shape to enjoy physical intimacy? Regular physical activity can improve energy levels and increase your confidence about your physical appearance, which may boost your sex life. But there's even more to it than that. Regular physical activity may enhance arousal for women. And men who exercise regularly are less likely to have problems with erectile dysfunction than are men who don't exercise.",n.a.createElement("h2",null,"7. Exercise can be fun \u2026 and social!"),"Exercise and physical activity can be enjoyable. They give you a chance to unwind, enjoy the outdoors or simply engage in activities that make you happy. Physical activity can also help you connect with family or friends in a fun social setting. So take a dance class, hit the hiking trails or join a soccer team. Find a physical activity you enjoy, and just do it. Bored? Try something new, or do something with friends or family. The bottom line on exercise Exercise and physical activity are great ways to feel better, boost your health and have fun. For most healthy adults, the Department of Health and Human Services recommends: At least 150 minutes a week of moderate aerobic activity or 75 minutes a week of vigorous aerobic activity, or a combination of moderate and vigorous activity. The guidelines suggest that you spread this exercise throughout the week. Examples include running, walking or swimming. Even small amounts of physical activity are helpful, and accumulated activity throughout the day adds up to provide health benefits. Strength training exercises for all major muscle groups at least two times a week. Examples include lifting free weights, using weight machines or doing body-weight training. Spread your activities throughout the week. If you want to lose weight, meet specific fitness goals or get even more benefits, you may need to ramp up your moderate aerobic activity to 300 minutes or more a week. Remember to check with your doctor before starting a new exercise program, especially if you have any concerns about your fitness, haven't exercised for a long time, have chronic health problems, such as heart disease, diabetes or arthritis."),n.a.createElement(m.b,{className:"link",to:"/"},"Back"))}}]),t}(o.Component),j=a(36),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={workout:{name:"",type:"",caloriesPerHour:""},workoutList:[]},a.componentDidMount=function(){w.a.get("/excersize").then(function(e){a.setState({workoutList:e.data}),console.log(e.data)})},a.handleChange=function(e){e.preventDefault();var t=Object(j.a)({},a.state.workout);t[e.target.name]=e.target.value,a.setState({workout:t})},a.createNewWorkout=function(e){var t={name:a.state.workout.name,type:a.state.workout.type,caloriesPerHour:a.state.workout.caloriesPerHour};w.a.post("/excersize",t).then(function(e){e.json(e.data)})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Submit a new workout"),n.a.createElement("form",{onSubmit:this.createNewWorkout},n.a.createElement("input",{className:"form",type:"text",name:"name",placeholder:"Name of workout",onChange:this.handleChange,value:this.state.workout.name}),n.a.createElement("input",{className:"form",type:"text",name:"type",placeholder:"Type of workout",onChange:this.handleChange,value:this.state.workout.type}),n.a.createElement("input",{className:"form",type:"number",name:"caloriesPerHour",placeholder:"Cals burned per hour",onChange:this.handleChange,value:this.state.workout.caloriesPerHour}),n.a.createElement("button",{type:"submit",className:"btn"},"Send Request")),n.a.createElement("p",null),n.a.createElement("div",null,n.a.createElement("h2",null,"All requests:"),this.state.workoutList.map(function(e){return n.a.createElement("div",{className:"newWorkouts",key:e._id},e.name)})),n.a.createElement(m.b,{className:"links",to:"/"},"Back to home page"))}}]),t}(o.Component),H=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(m.a,null,n.a.createElement(y.c,null,n.a.createElement(y.a,{exact:!0,path:"/",component:k}),n.a.createElement(y.a,{exact:!0,path:"/description",component:x}),n.a.createElement(y.a,{exact:!0,path:"/SubmitNewWorkout",component:C}))))}}]),t}(n.a.Component);i.a.render(n.a.createElement(H,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.52902474.chunk.js.map