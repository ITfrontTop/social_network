const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {error && (
        <div className={StylePropertyMap.formSummaryError}>{error}</div>
      )}
      <div>
        <div>
          <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
        </div>
        <b>Looking for a job</b>:
        {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
      </div>

      <div>
        <b>My professional skills</b>:
        {createField(
          'My professional skills',
          'lookingForAJobDescription',
          [],
          Textarea
        )}
      </div>

      <div>
        <b>About me</b>: {profile.aboutMe}
        {createField('About me', 'aboutMe', [], Textarea)}
      </div>

      <div>
        <b>Contacts</b>:{' '}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>
                {key} {createField(key, 'contacts' + key, [], Input)}
              </b>
              :
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: 'editProfile' })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
