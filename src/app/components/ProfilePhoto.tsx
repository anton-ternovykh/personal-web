function ProfilePhoto() {
  return (
    <div className="flex justify-center mb-6 hidden lg:block">
      <img
        src="/photo.jpg"
        alt="Anton Ternovykh Headshot"
        className="w-90 h-90 rounded-lg object-cover border-4 border-theme-border"
      />
    </div>
  );
}

export default ProfilePhoto;
