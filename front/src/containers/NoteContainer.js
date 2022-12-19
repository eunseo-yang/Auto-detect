// import React, { Component } from "react";
// import { connect } from "react-redux";
// import InsertForm from "../components/notes/InsertForm";
// import NoteWrapper from "../components/notes/NoteWrapper";
//
// import * as noteActions from "../store/modules/notes";
//
// export class NoteContainer extends Component {
//     // eslint-disable-next-line no-undef
//     handleChange = ({ value }) => {
//         const { changeNoteInput } = this.props;
//         changeNoteInput({ value });
//     };
//
//     // eslint-disable-next-line no-undef
//     addNote = () => {
//         const { addNote } = this.props;
//         addNote();
//     };
//
//
//     render() {
//         const { noteInput, error } = this.props;
//         const { handleChange, addNote } = this;
//         return (
//             <div>
//                 <NoteWrapper>
//                     <InsertForm
//                         noteInput={noteInput}
//                         onChangeInput={handleChange}
//                         onAdd={addNote}
//                         error={error}
//                     />
//                 </NoteWrapper>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = state => ({
//     noteInput: state.notes.noteInput,
//     notes: state.notes.notes,
//     error: state.notes.error
// });
//
//
// const mapDispatchToProps = dispatch => {
//     return {
//         changeNoteInput: ({ value }) => {
//             dispatch(noteActions.changeNoteInput({ value }));
//         },
//         addNote: () => {
//             dispatch(noteActions.addNote());
//         }
//     };
// };
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(NoteContainer);
//
//
//
//
