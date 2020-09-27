class Storage {
  constructor(storageType){
      this.storageType = storageType;
  }

  set(name, item){
      this.storageType.setItem(name, JSON.stringify(item));
      return this;
  }

  get(name){
      return JSON.parse(this.storageType.getItem(name));
  }

  remove(name){
      this.storageType.removeItem(name);
      return this;
  }

  removeAll(){
      this.storageType.clear();
      return this;
  }
}

export { Storage };
