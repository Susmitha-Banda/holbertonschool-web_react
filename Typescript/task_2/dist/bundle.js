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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFZQTtJQWFFO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQWRELCtCQUFZLEdBQVo7UUFDSSxPQUFPLG1CQUFtQjtJQUM5QixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLE9BQU8sd0JBQXdCO0lBQ25DLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDSSxPQUFPLDJCQUEyQjtJQUN0QyxDQUFDO0lBS0gsZUFBQztBQUFELENBQUM7QUFFRDtJQWFFO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQWRELDhCQUFZLEdBQVo7UUFDSSxPQUFPLHVCQUF1QjtJQUNsQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLE9BQU8scUJBQXFCO0lBQ2hDLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLGlCQUFpQjtJQUM1QixDQUFDO0lBS0gsY0FBQztBQUFELENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUM3QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDN0MsT0FBTyxJQUFJLE9BQU8sRUFBRTtJQUN4QixDQUFDO0lBRUQsT0FBTyxJQUFJLFFBQVEsRUFBRTtBQUN2QixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFHbkMsU0FBUztBQUNULFNBQVMsVUFBVSxDQUFDLFFBQTRCO0lBQzlDLE9BQVEsUUFBcUIsQ0FBQyxpQkFBaUIsSUFBSSxTQUFTO0FBQzlELENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUMvQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsQ0FBQztTQUNJLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFDLENBQUM7QUFDSCxDQUFDO0FBRUQsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZ1xuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZ1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZ1xufVxuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiXG4gIH1cblxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiXG4gIH1cblxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEaXJlY3RvcicpXG4gIH1cbn1cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBcIkNhbm5vdCB3b3JrIGZyb20gaG9tZVwiXG4gIH1cblxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIFwiQ2Fubm90IGhhdmUgYSBicmVha1wiXG4gIH1cblxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIlxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICBjb25zb2xlLmxvZygnVGVhY2hlcicpXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xuICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gXCJudW1iZXJcIiAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICAgIHJldHVybiBuZXcgVGVhY2hlcigpXG4gIH1cblxuICByZXR1cm4gbmV3IERpcmVjdG9yKClcbn1cblxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSlcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKVxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKSlcblxuXG4vLyBUYXNrIDZcbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IGVtcGxveWVlIGlzIERpcmVjdG9yIHtcbiAgcmV0dXJuIChlbXBsb3llZSBhcyBEaXJlY3Rvcikud29ya0RpcmVjdG9yVGFza3MgIT0gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiB2b2lkIHtcbiAgaWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XG4gICAgY29uc29sZS5sb2coZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKSlcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCkpXG4gIH1cbn1cblxuZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMjAwKSk7XG5leGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=