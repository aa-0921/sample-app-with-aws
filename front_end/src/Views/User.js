import React from "react";
import { Formik, Form, Field } from "formik";

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 画像を表示するためにstateを作成します.
      profileImage: "",
    };
  }

  // 後ほど記述
  createUser = (payload) => {};

  setImage = (e, setFieldValue) => {
    let files = e.target.files;
    let reader = new FileReader();
    // 画像をbase64にエンコードします.
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      // stateに画像を入れることで描写させます.
      this.setState({ profileImage: reader.result });
      // formikで送信できるようにsetFieldValue()を呼び出します.
      setFieldValue("profile_image", reader.result);
    };
  };

  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          profile_image: "",
        }}
        onSubmit={this.CreateUser}
      >
        {({ setFieldValue, isSubmitting }) => {
          return (
            <Form>
              <label>プロフィール画像</label>
              <img
                className="profile-image"
                src={!this.state.profileImage ? "" : this.state.profileImage}
              />
              <React.Fragment>
                <Field
                  id="select_profile_image"
                  type="file"
                  name="profile_image2"
                  onChange={(e) => this.setImage(e, setFieldValue)}
                />
                <Field type="hidden" name="profile_image" />
              </React.Fragment>
              <label>名前</label>
              <Field className="input" type="text" name="name" />
              <button
                className="submit-button"
                type="submit"
                disabled={isSubmitting}
              >
                送信
              </button>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default Users;
