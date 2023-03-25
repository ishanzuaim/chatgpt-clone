interface Message {
  text: string;
  createdAt: admin.firestore.Timestap;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
