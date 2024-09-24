/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var Director = /** @class */ (function () {
    function Director() {
        console.log('Director');
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
        console.log('Teacher');
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// Task 6
function isDirector(employee) {
    return employee.workDirectorTasks != undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
function teachClass(todayClass) {
    return (todayClass == "Math") ? "Teaching Math" : "Teaching History";
}
console.log(teachClass('Math'));
console.log(teachClass('History'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFZQTtJQWFFO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQWRELCtCQUFZLEdBQVo7UUFDSSxPQUFPLG1CQUFtQjtJQUM5QixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLE9BQU8sd0JBQXdCO0lBQ25DLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDSSxPQUFPLDJCQUEyQjtJQUN0QyxDQUFDO0lBS0gsZUFBQztBQUFELENBQUM7QUFFRDtJQWFFO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQWRELDhCQUFZLEdBQVo7UUFDSSxPQUFPLHVCQUF1QjtJQUNsQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLE9BQU8scUJBQXFCO0lBQ2hDLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLGlCQUFpQjtJQUM1QixDQUFDO0lBS0gsY0FBQztBQUFELENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUM3QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDN0MsT0FBTyxJQUFJLE9BQU8sRUFBRTtJQUN4QixDQUFDO0lBRUQsT0FBTyxJQUFJLFFBQVEsRUFBRTtBQUN2QixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFHbkMsU0FBUztBQUNULFNBQVMsVUFBVSxDQUFDLFFBQTRCO0lBQzlDLE9BQVEsUUFBcUIsQ0FBQyxpQkFBaUIsSUFBSSxTQUFTO0FBQzlELENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUMvQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsQ0FBQztTQUNJLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFDLENBQUM7QUFDSCxDQUFDO0FBRUQsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQU1sQyxTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUN0QyxPQUFPLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtBQUN0RSxDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmdcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmdcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nXG59XG5cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCJcbiAgfVxuXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCJcbiAgfVxuXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCJcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgY29uc29sZS5sb2coJ0RpcmVjdG9yJylcbiAgfVxufVxuXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCJcbiAgfVxuXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCJcbiAgfVxuXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdUZWFjaGVyJylcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSBcIm51bWJlclwiICYmIHNhbGFyeSA8IDUwMCkge1xuICAgICAgcmV0dXJuIG5ldyBUZWFjaGVyKClcbiAgfVxuXG4gIHJldHVybiBuZXcgRGlyZWN0b3IoKVxufVxuXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKVxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKVxuXG5cbi8vIFRhc2sgNlxuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xuICByZXR1cm4gKGVtcGxveWVlIGFzIERpcmVjdG9yKS53b3JrRGlyZWN0b3JUYXNrcyAhPSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IHZvaWQge1xuICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGVtcGxveWVlLndvcmtUZWFjaGVyVGFza3MoKSlcbiAgfVxufVxuXG5leGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKTtcbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKTtcblxuXG4vLyBUYXNrIDdcbnR5cGUgU3ViamVjdHMgPSBcIk1hdGhcIiB8IFwiSGlzdG9yeVwiXG5cbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xuICByZXR1cm4gKHRvZGF5Q2xhc3MgPT0gXCJNYXRoXCIpID8gXCJUZWFjaGluZyBNYXRoXCIgOiBcIlRlYWNoaW5nIEhpc3RvcnlcIlxufVxuY29uc29sZS5sb2codGVhY2hDbGFzcygnTWF0aCcpKTtcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=