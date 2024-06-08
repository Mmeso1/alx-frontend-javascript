interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

export function createEmployee(salary: string | number) {
  return typeof salary === "number" && salary < 500
    ? new Teacher()
    : new Director();
}

function isDirector(employee: any): employee is DirectorInterface {
  return (
    typeof employee === "object" &&
    employee !== null &&
    "workDirectorTasks" in employee
  );
}

export function executeWork(employee: any) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects) {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}
