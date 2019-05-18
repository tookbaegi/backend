import models from '../../models';

export const create = async (req, res) => {
  const { userId, person, place, name } = req.body;

  try {
    const quest = await models.Quest.create({
      userId,
      person,
      place,
      name
    });

    res.status(200).send(quest);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    await models.Quest.destroy({
      where: { id }
    });
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { isPrivate } = req.body;

  try {
    await models.Quest.update(
      { isProgress: false, isPrivate, endAt: new Date() },
      { where: { id } }
    );
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const list = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      const quests = (await models.Quest.findAll({})).map(
        user => user.dataValues
      );
      res.status(200).send(quests);
    } else {
      const user = await models.Quest.findOne({ where: { id } });
      res.status(200).send(user.dataValues);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
