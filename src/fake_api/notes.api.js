let notes = [
    {
        _id: 1632679189739,
        title: "Note #1",
        description:
            "Nullam lobortis nibh ante, eu convallis orci mattis accumsan. Suspendisse convallis semper fermentum. Aliquam rhoncus arcu risus, ut ullamcorper massa lobortis eu. Phasellus id urna eget nibh lobortis vestibulum.",
    },
    {
        _id: 1632679191251,
        title: "Note #2",
        description:
            "Aliquam dignissim tristique magna non rutrum. Nulla luctus ligula quis metus pharetra, eget malesuada felis pellentesque. Morbi volutpat quis quam ut egestas. Aliquam sagittis nisl nec sapien finibus, vel pulvinar diam accumsan. Ut commodo tellus id turpis laoreet ullamcorper.",
    },
    {
        _id: 1632679199139,
        title: "Note #3",
        description:
            "Maecenas at lacus ac lorem vulputate ultrices ut a lorem. Aenean ullamcorper justo et augue pretium, nec porta mi ultricies. Morbi sodales mi sit amet semper consectetur. Phasellus a massa sapien. ",
    },
    {
        _id: 1632679264675,
        title: "Note #4",
        description:
            "Nullam lobortis nibh ante, eu convallis orci mattis accumsan. Suspendisse convallis semper fermentum. Aliquam rhoncus arcu risus, ut ullamcorper massa lobortis eu. Phasellus id urna eget nibh lobortis vestibulum.",
    },
]

export const getById = (id) => notes.find((note) => note._id === Number(id))

export const deleteNoteById = (id) => {
    let deleteNoteQuestion = window.confirm("Подтверждаете удаление заметки?")
    if (deleteNoteQuestion) {
        notes = notes.filter((note) => note._id !== Number(id))
    }
}

export default notes
