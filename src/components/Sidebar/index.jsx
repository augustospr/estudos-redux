import React from "react"

export default function Sidebar() {

  const state = {
    modules: [
      {
        id: 1,
        title: 'Iniciando com React',
        lessons: [
          { id: 1, title: 'Primeira aula' },
          { id: 2, title: 'Segunda aula' },
        ]
      },
      {
        id: 2,
        title: 'Aprendendo React',
        lessons: [
          { id: 1, title: 'Terceira aula' },
          { id: 2, title: 'Quarta aula' },
        ]
      },
    ]
  };

  const { modules } = state;

  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}