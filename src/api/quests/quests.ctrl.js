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
  const { userId } = req.params;
  const { place, person, sort } = req.query;

  try {
    if (place && person) {
      const quests = (await models.Quest.findAll({
        where: { place, person, isPrivate: false, isProgress: false }
      })).map(user => user.dataValues);
      res.status(200).send(quests);
    } else if (userId) {
      const publicQuests = (await models.Quest.findAll({
        where: {
          isPrivate: false
        }
      })).map(user => user.dataValues);
      const progressQuests = (await models.Quest.findAll({
        where: {
          isProgress: true
        }
      })).map(user => user.dataValues);
      const completeQuests = (await models.Quest.findAll({
        where: {
          isProgress: false
        }
      })).map(user => user.dataValues);

      res.status(200).send({ publicQuests, progressQuests, completeQuests });
    } else {
      const quests = await models.Quest.findAll({
        include: { model: models.Comment, limit: 2 }
      });

      res.status(200).send(quests);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const like = async (req, res) => {
  const { id } = req.params;

  try {
    const quest = await models.Quest.findOne({ where: { id } });
    await models.Quest.update(
      { like: quest.dataValues.like + 1 },
      { where: { id } }
    );
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
